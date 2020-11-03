const localStorageKeyName = 'recordList';

const recordListModel = {
    data: [] as RecordItem[],
    clone(data: RecordItem[] | RecordItem) {
        return JSON.parse(JSON.stringify(data));
    },
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.data;
    },//获取数据
    save() {
        window.localStorage.setItem(localStorageKeyName,
            JSON.stringify(this.data));
    }//保存数据
};

export {recordListModel};

