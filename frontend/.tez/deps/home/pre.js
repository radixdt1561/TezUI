
        import header from "/@/components/header.vue";import bannercustom from "/@/components/banner-custom.vue";import price from "/@/components/price.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/home","slots":{"default":[{"name":"banner-custom","data":{"componentName":"banner-custom"},"id":"0-banner-custom"},{"name":"price","data":{"componentName":"price"},"id":"1-price"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Blogs Site","canonical":"http://localhost:3000/home","metaTag":{}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"banner-custom":bannercustom,"price":price,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/home/post.js")
            })
        }    