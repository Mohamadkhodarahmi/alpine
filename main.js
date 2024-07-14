import Alpine from "alpinejs";

window.Alpine = Alpine

Alpine.data('post', () => {

    return {
        post: '',
        tempData: [],
        postData: [],
        async fetchData() {
            let apiResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
            return await apiResponse.json()
        },

        async init() {
            this.postData = await this.fetchData();
            this.tempData = this.postData;
        },
        search() {
            this.postData = this.tempData.filter(pos => {
                return this.post == pos.id;
            });
        },
        del(index){
            this.postData.splice(index,1)
            console.log(index)
        }



    }
})
Alpine.start()
