import{r as a,j as s,c as o}from"./index.cbd6625b.js";import{a as r,t as l,m as n,g as d}from"./constants.b70dfd88.js";const u="_about_127mu_1",_="_title_127mu_11",m="_subSectionTitle_127mu_20",h="_subTitle_127mu_24",b="_subTitle__txt_127mu_30",x="_subTitleDescription_127mu_34",T="_cardsOfTech_127mu_42",p="_card_127mu_42",j="_cardCheckBox_127mu_60",N="_cardImg_127mu_64",g="_cardTitle_127mu_68",t={about:u,title:_,subSectionTitle:m,subTitle:h,subTitle__txt:b,subTitleDescription:x,cardsOfTech:T,card:p,cardCheckBox:j,cardImg:N,cardTitle:g},f={visible:{y:0,opacity:1,transition:{type:"spring",duration:.5}},hidden:{opacity:0,y:100}},k=a.memo(({className:i})=>s.jsxs("section",{id:"about",className:o(t.about,{},[i]),children:[s.jsx("h2",{className:t.title,children:"About Me"}),r.map(({title:c,desc:e})=>s.jsxs("section",{className:t.subSectionTitle,children:[s.jsx("div",{className:t.subTitle,children:s.jsx("strong",{className:t.subTitle__txt,children:c})}),s.jsx("p",{className:t.subTitleDescription,children:e})]},c)),s.jsx("section",{className:t.cardsOfTech,children:l.map(({name:c,link:e})=>s.jsxs(n.div,{variants:f,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:t.card,children:[s.jsx("input",{className:t.cardCheckBox,type:"radio",name:"showTitle",id:`tech${c}`}),s.jsx("label",{htmlFor:`tech${c}`,children:s.jsx(d,{children:s.jsx("img",{className:t.cardImg,src:e,alt:c})})}),s.jsx("h4",{className:t.cardTitle,children:c})]},c))})]}));export{k as default};
