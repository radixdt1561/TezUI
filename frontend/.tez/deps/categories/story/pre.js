
        import header from "/@/components/header.vue";import articles from "/@/components/articles.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/categories/story","slots":{"default":[{"name":"articles","data":{"componentName":"articles","dynamicSourcePath":"filter-collections/bfa3e15c140dd26a6a3391e3fb705a68"},"id":"0-articles"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Story Category Articles","canonical":"http://localhost:3000/categories/story","metaTag":{"name":{"description":"Story Articles"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"articles":articles,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/categories/story/post.js")
            })
        }    