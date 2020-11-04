let id: number= parseInt(window.localStorage.getItem('_idMax')||'0')||0
//第一个0保底有字符串，第二个0保底能得到一个0而不是NaN

function createId(){
    id++;
    window.localStorage.setItem('_idMax',id.toString());
    return id;
}

export default createId