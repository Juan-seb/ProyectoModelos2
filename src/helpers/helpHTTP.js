export const helpHttp = () => {
    const customFetch = (endpoint,options) => {
        const defaultHeaders = {
            accept:"application/json",
            
        };

        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || "GET"; /*Si el usuario no especifica un metodo por default es GET */
        /* options.cache = 'no-cache'; */
        options.headers = options.headers 
            ? {...defaultHeaders,...options.headers}:defaultHeaders;
        
        options.body = JSON.stringify(options.body) || false;
        /*Como la peticion va a un objeto json tengo que parsear los datos que iran con la peticion */
        
        if(!options.body)delete options.body; /*Borro la propiedad de body porque no se la puedo pasar a una peticion
        si es false o true */

        setTimeout(() => controller.abort(), 3000);
        
        return fetch(endpoint,options).
                then(res => res.ok?res.json():Promise.reject({
                    err: true,
                    status : res.status || "404", /*En caso de que la rta no tenga status */
                    statusText : res.statusText || "Ha ocurrido un error"
                }))
                .catch(err => err)
    }

    const get = (url,options={}) => customFetch(url,options);
    const post = (url,options = {}) => {
        options.method = "POST";
        return customFetch(url,options);
    }
    const put = (url , options = {}) => {
        options.method = "PUT";
        return customFetch(url,options)
    }
    const del = (url, options = {}) => {
        options.method = "DELETE";
        return customFetch(url,options);
    }

    return {
        get,post,put,del
    }
}