<template>
    <div class="fill_content">
        <input id="file" type="file" @change="handleFileChange"/>
        <el-button type="primary" size="mini" @click="handleUpload">上传</el-button>
    </div>
</template>

<script>

const SIZE = 10 * 1024 * 1024;
const STATE_MAP = {
    wait: 'wait',
    pause: 'pause',
    uploading: 'uploading'
}

export default {
    name: 'index',
    data(){
        return {
            container: {
                file: null,
                hash: '',
                worker: null
            },

            hashPercentage: 0,
            data: [],
            requestList: [],
            status: STATE_MAP.wait,
            fakeUploadPercentage: 0
        }
    },

    computed: {
        uploadDisabled() {

        },
        uploadPercentage() {

        }
    },

    watch: {
        uploadPercentage(val) {
            if(val > this.fakeUploadPercentage) {
                this.fakeUploadPercentage = val
            }
        }
    },

    methods: {

        async handleDelete() {
            const {data} = await this.request({url: 'https://123.com'});
            if(data.code === 0) {
                this.$message.success('删除成功！')
            }
        },

        handlePause() {
            this.status = STATE_MAP.pause;
            this.resetData();
        },

        resetData() {
            this.requestList.forEach(i => i?.abort());
            this.requestList = [];
            if(this.container.worker) {
                this.container.worker.message = null;
            }

        },

        async handleResume() {
            this.status = STATE_MAP.uploading;
            const {uploadList} = await this.verifyUpload(this.container.file.name, this.container.hash);
            await this.uploadChunks(uploadList)

        },



        request({
            url,
            method='post',
            data,
            headers = {},
            onProgress = e => e,
            requestList
        }) {
            return new Promise(resolve => {
                const xhr = new XMLHttpRequest();
                xhr.upload.onprogress = onProgress;
                xhr.open(method, url);
                Object.keys(headers).forEach(key => {
                    xhr.setRequestHeader(key, headers[key])
                })
                xhr.send(data);

                xhr.onload = e => {
                    if(requestList) {
                        const xhrIndex = requestList.findIndex(item => item === xhr);
                        requestList.splice(xhrIndex, 1);
                    }
                    resolve({
                        data: e.target.response
                    })
                }

                requestList?.push(xhr);
            })
        },

        createFileChunk(file, size = SIZE) {
            const fileChunkList = [];
            let cur = 0;
            while(cur < file.size) {
                fileChunkList.push({file: file.slice(cur, cur + size)});
                cur += size;
            }
            return fileChunkList;
        },

        calculateHash(fileChunkList) {
            return new Promise(resolve => {
                this.container.worker = new Worker("./hash.js");
                this.container.worker.postMessage({fileChunkList});
                this.container.worker.onmessage = e => {
                    const {percentage, hash} = e.data;
                    this.hashPercentage = percentage;
                    if(hash) {
                        resolve(hash);
                    }
                }
            })
        },

        handleFileChange(e) {
            const [file] = e.target.files
            if(!file) return;
            Object.assign(this.$data, this.$options.data());
            this.container.file = file;
        },


        async handleUpload() {
            if(!this.container.file) return;
            this.status = STATE_MAP.uploading;
            const fileChunkList = this.createFileChunk(this.container.file);
            this.container.hash = await this.calculateHash(fileChunkList);
            const {shouldUpload, uploadList} = await this.verifyUpload(
                this.container.file.name,
                this.container.hash
            )

            if(!shouldUpload) {
                this.$message.success('1111');
                this.status = STATE_MAP.wait;
                return;
            }

            this.data = fileChunkList.map(({ file },index) => ({
                fileHash: this.container.hash,
                index,
                hash: this.container.hash + '-' + index,
                chunk: file,
                size: file.size,
                percentage: uploadList.includes(index)? 100 : 0

            }))

            await this.uploadChunks(uploadList);
        },

        async uploadChunks(uploadList = []) {
            const requestList = this.data
                .filter((hash) => !uploadList.includes(hash))
                .map(({formData, index}) => {
                    this.request({
                        url: 'http://localhost:8080',
                        data: formData,
                        onProgress: this.createProgressHandler(htis.data[index]),
                        requestList: this.requestList
                    })
                })
            await Promise.all(requestList);

            if(uploadList.length + requestList.length === this.data.length){
                await this.mergeRequest();
            }

        },

        async mergeRequest() {
            await this.request({
                url: '0000',
                headers: {
                    'content-type': "application/json"
                },
                data: JSON.stringify({
                    size: SIZE,
                    fileHash: this.container.hash,
                    filename: this.container.file.name
                })
            });

            this.$message.success('222');
            this.status = STATE_MAP.wait;
        }
    }

}
</script>

<style scoped>

</style>