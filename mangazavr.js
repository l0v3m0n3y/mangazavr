class mangazavr{
    constructor(){
        this.api = "https://mangazavr.ru/wp-admin/admin-ajax.php"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
    }
    async sigin(login,password){
        let req=await fetch(`${this.api}/`,{method:"POST",headers: this.headers,body:`action=wp_manga_signin&login=${login}&pass=${password}&rememberme=forever&nonce=c6fa3dc2bd`});
        this.headers["cookie"]=await req.headers.get("set-cookie")
        return await req.json();
    }
    async register(login,email,password){
        let req=await fetch(`${this.api}/`,{method:"POST",headers: this.headers,body:`action=wp_manga_signup&user_login=${login}&user_pass=${password}&user_email=${email}&nonce=c6fa3dc2bd`});
        return await req.json();
    }
    async search_title(title){
        let req=await fetch(`${this.api}/`,{method:"POST",headers: this.headers,body:`action=wp-manga-search-manga&title=${title}`});
        return await req.json();
    }
    async rating_manga(star,postid){
        let req=await fetch(`${this.api}/`,{method:"POST",headers: this.headers,body:`action=wp-manga-save-rating&star=${star}&postID=${postid}`});
        return await req.json();
    }
    async user_section(){
        let req=await fetch(`${this.api}/`,{method:"POST",headers: this.headers,body:`action=wp-manga-get-user-section`});
        return await req.json();
    }
}
module.exports = {mangazavr};