(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{116:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return o})),r.d(a,"metadata",(function(){return c})),r.d(a,"rightToc",(function(){return s})),r.d(a,"default",(function(){return l}));var t=r(1),i=r(6),n=(r(0),r(136)),o={id:"quick-guide-git",title:"GIT \u2013 Gu\xeda r\xe1pida",sidebar_label:"GIT \u2013 Gu\xeda r\xe1pida"},c={id:"quick-guides/quick-guide-git",title:"GIT \u2013 Gu\xeda r\xe1pida",description:"Las zonas de Git\r",source:"@site/docs\\quick-guides\\quick-guide-git.md",permalink:"/personal-docusaurus/docs/quick-guides/quick-guide-git",editUrl:"https://github.com/vgrados2/personal-docusaurus/edit/master/docs/quick-guides/quick-guide-git.md",sidebar_label:"GIT \u2013 Gu\xeda r\xe1pida",sidebar:"someSidebar",next:{title:"NPM \u2013 Gu\xeda r\xe1pida",permalink:"/personal-docusaurus/docs/quick-guides/quick-guide-npm"}},s=[{value:"Las zonas de Git",id:"las-zonas-de-git",children:[]},{value:"Inicializar repositorio",id:"inicializar-repositorio",children:[]},{value:"Manejo de Ramas en Git",id:"manejo-de-ramas-en-git",children:[{value:"Creaci\xf3n de ramas",id:"creaci\xf3n-de-ramas",children:[]},{value:"Actualizaci\xf3n de ramas",id:"actualizaci\xf3n-de-ramas",children:[]},{value:"Listar ramas",id:"listar-ramas",children:[]},{value:"Moverse a una rama o a un commit espec\xedfico",id:"moverse-a-una-rama-o-a-un-commit-espec\xedfico",children:[]},{value:"Fusionar ramas (merge)",id:"fusionar-ramas-merge",children:[]}]},{value:"Manejo de Commits",id:"manejo-de-commits",children:[{value:"Deshacer cambios",id:"deshacer-cambios",children:[]},{value:"Editar ultimo commit (aun no pushed)",id:"editar-ultimo-commit-aun-no-pushed",children:[]}]},{value:"Manejo de Tags de git",id:"manejo-de-tags-de-git",children:[{value:"tags",id:"tags",children:[]}]},{value:"Guardar cambios actuales para recuperarlos despu\xe9s",id:"guardar-cambios-actuales-para-recuperarlos-despu\xe9s",children:[]},{value:"Configuraciones",id:"configuraciones",children:[{value:"Configurar el usuario y direcci\xf3n de correo en git global",id:"configurar-el-usuario-y-direcci\xf3n-de-correo-en-git-global",children:[]},{value:"Configurar el usuario y direcci\xf3n de correo para un repo",id:"configurar-el-usuario-y-direcci\xf3n-de-correo-para-un-repo",children:[]},{value:"Configurar repositorios remotos",id:"configurar-repositorios-remotos",children:[]}]}],u={rightToc:s};function l(e){var a=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(t.a)({},u,r,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"las-zonas-de-git"},"Las zonas de Git"),Object(n.b)("p",null,Object(n.b)("img",Object(t.a)({parentName:"p"},{src:"https://www.kindpng.com/picc/m/368-3680560_git-push-pull-commit-hd-png-download.png",alt:"alt zonas de git"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"WORKING DIRECTORY:")," Es el directorio de trabajo , lo q aun no se ha subido")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"STAGING AREA:")," Es donde se agregan temporalmente archivos persistentes.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"REPOSITORY (localrepo):")," Cuando ya se realiza un commit los archivos pasan del staging a repository"))),Object(n.b)("h2",{id:"inicializar-repositorio"},"Inicializar repositorio"),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'$ git init                            # Iniciar un nuevo proyecto de git (.git)\n$ git status                          # Estado actual del repositorio\n$ git add .                           # Marca todos los ficheros para el pr\xf3ximo commit. \n$ git commit -m "Commit inicial"      # Crea un nuevo commit con los ficheros marcados.\n$ git commit -am "Commit inicial"     # add y commit\n')),Object(n.b)("h2",{id:"manejo-de-ramas-en-git"},"Manejo de Ramas en Git"),Object(n.b)("h3",{id:"creaci\xf3n-de-ramas"},"Creaci\xf3n de ramas"),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"$ git branch <nombre>                 # Crear la rama en el punto actual. Es necesario hacer checkout a la misma.\n$ git checkout -b <nombre>            # Crear rama en el punto actual y hacerle checkout.\n")),Object(n.b)("h3",{id:"actualizaci\xf3n-de-ramas"},"Actualizaci\xf3n de ramas"),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"$ git branch -m <actual> <nuevo>      # Renombrar la rama\n$ git branch -d <nombre>              # Borrar la rama\n")),Object(n.b)("h3",{id:"listar-ramas"},"Listar ramas"),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"$ git branch                          # Listar todas las ramas\n$ git branch -v                       # Mostrar \xfaltimo commit en cada rama y su situaci\xf3n respecto a su rama remota (si hay)\n$ git branch --merged                 # Mostrar ramas que se han fusionado con la actual, y por tanto pueden borrarse\n$ git branch --no-merged              # Mostrar ramas con trabajos sin funsionar. Intentar borrarlas dar\xe1 un error.\n")),Object(n.b)("h3",{id:"moverse-a-una-rama-o-a-un-commit-espec\xedfico"},"Moverse a una rama o a un commit espec\xedfico"),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"$ git checkout <COMMIT>            # No toca los cambios locales\n$ git checkout -f <COMMIT>         # Sobreescribe los cambios locales\n")),Object(n.b)("h3",{id:"fusionar-ramas-merge"},"Fusionar ramas (merge)"),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"$ git merge <nombre>               # Fusiona la rama indicada en la rama actual\n")),Object(n.b)("h2",{id:"manejo-de-commits"},"Manejo de Commits"),Object(n.b)("h3",{id:"deshacer-cambios"},"Deshacer cambios"),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"$ git revert <COMMIT>              # Deshacer de forma segura los cambios introducidos por un commit cualquiera\n$ git reset --hard                 # Deshace los cambios locales\n$ git reset --hard HEAD~1          # Elimina el \xfaltimo commit\n")),Object(n.b)("h3",{id:"editar-ultimo-commit-aun-no-pushed"},"Editar ultimo commit (aun no pushed)"),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"# Realizar el add previamente\n$ git commit --amend          # cuando ya metiste el comentario pero no has hecho aun push, puedes editarlo\n")),Object(n.b)("h2",{id:"manejo-de-tags-de-git"},"Manejo de Tags de git"),Object(n.b)("h3",{id:"tags"},"tags"),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"$ git tag                              # Lista los tags locales mas -n para descripcion\n$ git ls-remote --tags                 # Listar los tags remotos\n$ git tag -d <nombre>                  # Eliminar Tag Local\n$ git push -d origin <nombre>          # Eliminar Tag Remoto\n$ git push --tags                      # Subir Tags al repositorio remoto\n")),Object(n.b)("h2",{id:"guardar-cambios-actuales-para-recuperarlos-despu\xe9s"},"Guardar cambios actuales para recuperarlos despu\xe9s"),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'$ git stash                    # Guarda cambios hechos desde el ultimo commit\n$ git stash save "descrip"     # Guarda cambios hechos desde el ultimo commit\n$ git stash pop                # Recupera los cambios guardados\n$ git stash list               # Lista los estados guardados\n$ git stash apply              # Aplica cambios guardados sin borrarlos de la lista\n$ git stash clear              # Para limpiar todo el stash\n')),Object(n.b)("h2",{id:"configuraciones"},"Configuraciones"),Object(n.b)("h3",{id:"configurar-el-usuario-y-direcci\xf3n-de-correo-en-git-global"},"Configurar el usuario y direcci\xf3n de correo en git global"),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'git config --global user.name "username"\ngit config --global user.email "name@domain.com"\ngit config --global color.diff true\n')),Object(n.b)("h3",{id:"configurar-el-usuario-y-direcci\xf3n-de-correo-para-un-repo"},"Configurar el usuario y direcci\xf3n de correo para un repo"),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'git config user.name "username"\ngit config user.email "name@domain.com"\n')),Object(n.b)("h3",{id:"configurar-repositorios-remotos"},"Configurar repositorios remotos"),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"git remote -v                                                         #ver ramas remotas\ngit remote set-url origin https://github.com/USERNAME/REPOSITORY.git  #Cambiar url remota\ngit remote add origin https://github.com/user/repo.git                #Setear una nueva url remota\ngit remote rm $name                                                   #Eliminar url remota\n")))}l.isMDXComponent=!0},136:function(e,a,r){"use strict";r.d(a,"a",(function(){return m})),r.d(a,"b",(function(){return p}));var t=r(0),i=r.n(t);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,i=function(e,a){if(null==e)return{};var r,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(i[r]=e[r]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var a=i.a.useContext(u),r=a;return e&&(r="function"==typeof e?e(a):c({},a,{},e)),r},m=function(e){var a=l(e.components);return i.a.createElement(u.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},b=Object(t.forwardRef)((function(e,a){var r=e.components,t=e.mdxType,n=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),b=t,p=m["".concat(o,".").concat(b)]||m[b]||d[b]||n;return r?i.a.createElement(p,c({ref:a},u,{components:r})):i.a.createElement(p,c({ref:a},u))}));function p(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=r.length,o=new Array(n);o[0]=b;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var u=2;u<n;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);