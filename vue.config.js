module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://web.juhe.cn/',
                secure:false,
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}