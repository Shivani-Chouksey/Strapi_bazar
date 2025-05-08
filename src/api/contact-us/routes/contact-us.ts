import path from "path";

export default{
    routes:[{
        method:"POST",
            path:"/contact-us",
            handler:"contact-us.submit",
            config:{
                policies:[],
                middlewares:[],
            },
    }]
}