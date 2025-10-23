import{u as m,j as a}from"./index-YW_rZnn7.js";const i="/assets/html-D9hbBLeU.png",o="/assets/CSS-DJMV_cB3.png",l="/assets/js-CjwWXt9H.png",r="/assets/java-BlcFk-Zt.png",g="/assets/python-Byr6O1tN.png",c="/assets/php-Cn1y71Ad.png",d="/assets/laravel-HTo-2_aY.png",p="/assets/react-DIR6Jr2N.png",x="/assets/figma-BgNmrAmW.png",f="/assets/sql-Bl78B3Xg.png",h="/assets/mongo-DAk48G1t.png",u="/assets/node-CbdPv5VR.png",j="/assets/spring-boot-BhFfxbue.png",v="/assets/tailwind-BXLArmq2.png",y="/assets/pl-sql-NW1Srgv2.png",I="/assets/flutter-DnvFBWK-.png",b="/assets/kubernetes-D4Cy30qR.png",N="/assets/DOCKER-BaTsZV4m.png",w="/assets/terraform-DThKo7fo.png",B="/assets/git-CdxyigZe.png",S=[{name:"HTML",image:i},{name:"CSS",image:o},{name:"JavaScript",image:l},{name:"Java",image:r},{name:"Python",image:g},{name:"PHP",image:c},{name:"Laravel",image:d},{name:"React",image:p},{name:"Figma",image:x},{name:"SQL",image:f},{name:"MongoDB",image:h},{name:"Node.js",image:u},{name:"Spring Boot",image:j},{name:"Tailwind CSS",image:v},{name:"PL/SQL",image:y},{name:"Flutter",image:I},{name:"Kubernetes",image:b},{name:"Docker",image:N},{name:"Terraform",image:w},{name:"Git",image:B}],D={en:{sectionTitle:"Skills"},fr:{sectionTitle:"Compétences"}},C=()=>{const{language:s}=m(),t=D[s];return a.jsxs("section",{id:"skills",className:"relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 py-10  overflow-hidden",children:[a.jsxs("div",{className:"container mx-auto max-w-6xl px-4 md:px-6",children:[a.jsx("div",{className:"mb-12",children:a.jsxs("div",{className:"inline-flex items-center space-x-4",children:[a.jsxs("h2",{id:"skills-heading",className:"text-2xl font-bold text-white sm:text-3xl lg:text-4xl font-mono m-0",children:[a.jsx("span",{className:"text-yellow-400",children:"#"}),a.jsx("span",{className:"text-white",children:t.sectionTitle})]}),a.jsx("div",{className:"h-0.5 w-24 sm:w-40 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"})]})}),a.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-x-4 gap-y-8",children:S.map((e,n)=>a.jsxs("div",{className:"flex flex-col items-center justify-center gap-2 animate-fade-in-up",style:{animationDelay:`${n*50}ms`},children:[a.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 hover:-translate-y-2 animate-float",children:a.jsx("img",{src:e.image,alt:e.name,className:"w-full h-full object-contain"})}),a.jsx("p",{className:"text-amber-200 text-sm font-semibold text-center",children:e.name})]},e.name))})]}),a.jsx("style",{children:`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out both;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
          animation-delay: ${Math.random()*2}s; /* Adds variation to the float */
        }
      `})]})};export{C as default};
