export default {
    path:"/movie",
    component:()=>import("@/views/Movie"),
    children:[
        {
            path:"city",
            component:()=>import("@/components/City")
        },
        {
            path:"nowplaying",
            component:()=>import("@/components/NowPlaying")
        },
        {
            path:"comesoon",
            component:()=>import("@/components/ComeSoon")
        },
        {
            path:"search",
            component:()=>import("@/components/Search")
        },
        {
                path:"detail/1/:movieId",
                components:{
                    default:()=>import("@/components/NowPlaying"),
                    detail:()=>import("@/views/Movie/Detail")
                },
                props:{
                    detail:true
                }
        },
        {
            path:"detail/2/:movieId",
            components:{
                default:()=>import("@/components/ComeSoon"),
                detail:()=>import("@/views/Movie/Detail")
            },
            props:{
                detail:true
            }
    },
        {
            path:"/movie",
            redirect:"/movie/nowplaying"
        }
    ]
}