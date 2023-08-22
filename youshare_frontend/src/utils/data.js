export const userQuery =(sub)=>{
    const query = `*[_type=='user' && _id=='${sub}']`;
    console.log(sub);
    return query;
}