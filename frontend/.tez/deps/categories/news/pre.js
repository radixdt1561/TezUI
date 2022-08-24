
        import header from "/@/components/header.vue";import articles from "/@/components/articles.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/categories/news","slots":{"default":[{"name":"articles","data":{"componentName":"articles","dynamicSourcePath":"filter-collections/a3c812d875e443291866cf585bdd4723"},"id":"0-articles"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"News Category Articles","canonical":"http://localhost:3000/categories/news","metaTag":{"name":{"description":"News Articles"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"articles":articles,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/categories/news/post.js")
            })
        }    