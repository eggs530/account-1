type RecordItem={
    tags:string[],
    notes:string;
    type:string;
    amount:number;
    createdAt?:Date
}
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => "success" | "duplicated";
    //success表示成功 duplicated表示内容重复
    //联合类型：防止字符串拼写错误 可直接列举具体的字符串表明类型
    update: (id: string, name: string) => "success" | "not found" | "duplicated";
    remove:(id:string)=>boolean;
    save: () => void;//不返回
}
interface Window{
    tagList:Tag[]
}

