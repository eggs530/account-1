const localStorageKeyName = "tagList";

const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]");
        return this.data;
    },//获取数据
    create(name: string) {
        //this.data = [{id:'1',name:'1'},{id:'2',name:'2"}]
        const names = this.data.map(item => item.name);//获取所有item里面的name组成新的数组
        if (names.indexOf(name) >= 0) {
            return "duplicated";
        }
        this.data.push({id: name, name: name});
        this.save();
        return "success";
    },
    update(id: string, name: string) {
        const idList = this.data.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return "duplicated";
            } else {
                const tag = this.data.filter(item => item.id === id)[0];
                tag.name = name;
                this.save();
                return "success";
            }
        } else {
            return "not found";
        }
    },
    remove(id: string) {
        let index = -1;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break;
            }
        }
        console.log('index')
        console.log(index)
        this.data.splice(index, 1);
        this.save();
        return true;
    },
    save(){
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }//保存数据
 };

export {tagListModel};
