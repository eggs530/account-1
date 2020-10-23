const localStorageKeyName = 'recordList'; //常量化避免被修改
const model = {
    clone(data:RecordItem[]|RecordItem){
        return JSON.parse(JSON.stringify(data))
    },
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    },//获取数据
    save(data:RecordItem[]) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    }//保存数据
};

export {model};
