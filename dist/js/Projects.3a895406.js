import{r as l,j as s,A as m,c}from"./index.cbd6625b.js";import{g as u,m as x,p as h}from"./constants.b70dfd88.js";const b="_buttonPushable_1v34n_1",n={buttonPushable:b,"button-82-shadow":"_button-82-shadow_1v34n_14","button-82-edge":"_button-82-edge_1v34n_27","button-82-front":"_button-82-front_1v34n_37"},N=l.memo(({className:o,btnTxt:r})=>s.jsxs(m,{className:c(n.buttonPushable,{},[o]),type:"button",children:[s.jsx("span",{className:n["button-82-shadow"]}),s.jsx("span",{className:n["button-82-edge"]}),s.jsx("span",{className:c(n["button-82-front"]),children:r})]})),v="_wrapper_1jm8j_1",w="_content_1jm8j_5",T="_cardFooter_1jm8j_9",F="_cardFooterTitle_1jm8j_18",g="_cardFooterDescription_1jm8j_23",y="_links_1jm8j_34",C="_showMore_1jm8j_43",t={wrapper:v,content:w,cardFooter:T,cardFooterTitle:F,cardFooterDescription:g,links:y,showMore:C},P=({className:o,project:r})=>{const{title:a,desc:d,mainImg:_,video:j}=r,[i,p]=l.useState(!0);return s.jsxs("div",{className:c(t.wrapper,{},[o]),children:[s.jsxs("div",{className:"header",children:[s.jsx(u,{children:s.jsx("video",{src:j,autoPlay:!0,muted:!0,loop:!0,style:{display:i?"none":"block"},onCanPlay:()=>p(!1)})}),s.jsx("img",{className:t.content,loading:"lazy",src:_,alt:a,style:{display:i?"block":"none"}})]}),s.jsxs("div",{className:t.cardFooter,children:[s.jsx("h4",{className:t.cardFooterTitle,children:a}),s.jsx("p",{className:t.cardFooterDescription,children:d}),s.jsx("div",{className:t.links,children:s.jsx("a",{href:"/#",className:t.showMore,children:s.jsx(N,{btnTxt:"Show details"})})})]})]})},f="_projects_4uxqm_1",q="_projectsWrapper_4uxqm_10",k="_title_4uxqm_14",W="_subTitle_4uxqm_21",D="_subTitle__txt_4uxqm_27",I="_projectsCard_4uxqm_31",M="_projectCard_4uxqm_41",e={projects:f,projectsWrapper:q,title:k,subTitle:W,subTitle__txt:D,projectsCard:I,projectCard:M},A=l.memo(({className:o})=>s.jsx("section",{id:"projects",className:c(e.projects,{},[o]),children:s.jsxs("div",{className:e.projectsWrapper,children:[s.jsx("h2",{className:e.title,children:"Projects"}),s.jsx("div",{className:e.subTitle,children:s.jsx("strong",{className:e.subTitle__txt,children:"What I Built"})}),s.jsx(x.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:{visible:{opacity:1,scale:1},hidden:{opacity:0,scale:0}},className:e.projectsCard,children:h.map((r,a)=>s.jsx(P,{project:r,className:c(e.projectCard)},a))})]})}));export{A as default};
