const localStorageKeyName = 'tagList';
type Tag = {
    id:string;
    name:string;
}
type TagListModel ={
    data:Tag[]
    fetch:()=>Tag[]
    create:(name:string)=>'success'|'duplicated'
    //success表示成功 duplicated表示内容重复
    //联合类型：防止字符串拼写错误 可直接列举具体的字符串表明类型
    save:()=>void//不返回
}
const tagListModel:TagListModel= {
    data:[],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
        return this.data
        },//获取数据
    create(name:string){
        //this.data = [{id:'1',name:'1'},{id:'2',name:'2"}]
        const names = this.data.map(item => item.name)//获取所有item里面的name组成新的数组
        if(names.indexOf(name)>=0){return 'duplicated'}
        this.data.push({id:name, name:name});
        this.save()
        return 'success'
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }//保存数据
};

export {tagListModel};
