(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/imdb.8ba3391e.svg"},45:function(e,t,a){e.exports=a(79)},50:function(e,t,a){},51:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),s=(a(50),a(7)),o=a(8),i=a(10),m=a(9),u=a(11),d=(a(51),a(13)),p=a(39),E={searchResults:[],totalItemsCount:"",movieDetails:[]},v=Object(d.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVIE":return{searchResults:t.payload.data.Search,totalItemsCount:t.payload.data.totalResults};case"GET_MOVIE_DETAILS":return{movieDetails:t.payload};default:return e}}}),h=[p.a],b=Object(d.e)(v,{},Object(d.d)(d.a.apply(void 0,h),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),f=a(16),g=a(15),y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark"},l.a.createElement(g.b,{to:"/",className:"navbar-brand",href:"!#"},"Movies Search"),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"})))}}]),t}(n.Component),O=a(26),N=a.n(O),w=a(42),R=a.n(w),k=a(43),P=a.n(k),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={modalIsOpen:!1},a.addDefaultSrc=function(e){e.target.src="https://via.placeholder.com/286x400.png?text=Poster+not+available"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.searchResult,t=e.Poster,a=e.Title,n=e.Type,r=e.Year,c=e.imdbID;return l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:t,className:"card-img-top",alt:"Poster not found",onError:this.addDefaultSrc}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},a),l.a.createElement("p",{className:"card-text",style:{textTransform:"capitalize"}},"Type: ",n),l.a.createElement("p",{className:"card-text",style:{textTransform:"capitalize"}},"Year released: ",r)),l.a.createElement("div",{className:"card-footer"},l.a.createElement(g.b,{to:"moviedetails/".concat(c),href:"http://www.omdbapi.com/?i=".concat(c,"&apikey=13b1230d"),className:"btn btn-primary mx-1"},"Read More"),l.a.createElement("a",{href:"https://www.imdb.com/title/".concat(c),className:"d-inline-block",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:P.a,alt:"",className:"imdb-logo"}))))}}]),t}(n.Component),j=a(44),C=a.n(j),D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={query:"",searchResults:[],totalItemsCount:"",activePage:1},a.onChange=function(e){a.setState({query:e.target.value})},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.query,l=t.activePage;""===n?alert("Please enter a movie name."):a.props.searchMovie(n,l)},a.handlePageChange=function(e){var t=a.state.query;a.setState({activePage:e}),a.props.searchMovie(t,e)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.searchResults,a=e.totalItemsCount;this.setState({totalItemsCount:a,searchResults:t})}},{key:"render",value:function(){var e=this.state,t=e.searchResults,a=e.totalItemsCount,n=e.activePage;return l.a.createElement("div",null,l.a.createElement("form",{className:"form-inline my-2 my-lg-0",onSubmit:this.onSubmit},l.a.createElement("input",{className:"form-control mr-sm-2 col-12 col-sm-8",id:"search-input",type:"search",placeholder:"Search","aria-label":"Search",name:"search",onChange:this.onChange,maxLength:"50"}),l.a.createElement("button",{className:"btn btn-success my-2 my-sm-0 col-4 col-sm-3",type:"submit"},"Search")),0!==t.length?l.a.createElement("div",{className:"d-flex my-4",style:{justifyContent:"center"}},l.a.createElement(R.a,{totalItemsCount:a,onChange:this.handlePageChange,activePage:n,itemsCountPerPage:10,pageRangeDisplayed:5,itemClass:"page-item",linkClass:"page-link",prevPageText:"Prev",nextPageText:"Next",firstPageText:"<<",lastPageText:">>",disabledClass:"disabled",linkClassFirst:"page-link",linkClassLast:"page-link",linkClassPrev:"page-link",linkClassNext:"page-link"})):null,l.a.createElement("div",{className:"row my-3 fade-in"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card-deck"},t.map(function(e){return l.a.createElement(x,{key:C()(),searchResult:e})})))))}}]),t}(n.Component),S=Object(f.b)(function(e){return{searchResults:e.movies.searchResults,totalItemsCount:e.movies.totalItemsCount}},{searchMovie:function(e,t){return function(a){N.a.get("http://www.omdbapi.com/?s=".concat(e,"&apikey=13b1230d&page=").concat(t)).then(function(e){a({type:"SEARCH_MOVIE",payload:e})})}}})(D),T=(a(78),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a.addDefaultSrc=function(e){e.target.src="https://via.placeholder.com/286x400.png?text=Poster+not+available"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getMovieDetails(e)}},{key:"componentWillReceiveProps",value:function(e){var t=e.movieDetails,a=t.Actors,n=t.Awards,l=t.BoxOffice,r=t.Director,c=t.Genre,s=t.Language,o=t.Metascore,i=t.Plot,m=t.Poster,u=t.Production,d=t.Rated,p=t.Released,E=t.Response,v=t.Runtime,h=t.Title,b=t.Type,f=t.Website,g=t.Writer,y=t.imdbRating,O=t.imdbVotes;this.setState({Actors:a,Awards:n,BoxOffice:l,Director:r,Genre:c,Language:s,Metascore:o,Plot:i,Poster:m,Production:u,Rated:d,Released:p,Response:E,Runtime:v,Title:h,Type:b,Website:f,Writer:g,imdbRating:y,imdbVotes:O})}},{key:"render",value:function(){var e=this.state,t=e.Actors,a=e.Awards,n=e.BoxOffice,r=e.Director,c=e.Genre,s=e.Language,o=e.Metascore,i=e.Plot,m=e.Poster,u=e.Production,d=e.Rated,p=e.Released,E=e.Response,v=e.Runtime,h=e.Title,b=e.Type,f=e.Website,g=e.Writer,y=e.imdbRating,O=e.imdbVotes;return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("img",{src:m,alt:"Movie Poster",onError:this.addDefaultSrc,className:"d-block",style:{margin:"auto"}})),l.a.createElement("div",{className:"col-12 col-md-6 py-md-2"},l.a.createElement("h4",{className:"text-darkgray"},h,l.a.createElement("sup",null,l.a.createElement("i",{className:"fa fa-star",style:{color:"#f2b01e"}}),y)),l.a.createElement("p",{className:"text-darkgray"},"Release Date: ",p),l.a.createElement("p",{className:"text-darkgray"},"Genre: ",c),l.a.createElement("p",{className:"text-darkgray"},"Runtime: ",v),l.a.createElement("p",{className:"text-darkgray",style:{textAlign:"justify"}},"Plot: ",i))),l.a.createElement("div",{className:"row my-3"},l.a.createElement("div",{className:"col"},l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Actors"),l.a.createElement("td",null,t)),l.a.createElement("tr",null,l.a.createElement("td",null,"BoxOffice"),l.a.createElement("td",null,n)),l.a.createElement("tr",null,l.a.createElement("td",null,"Awards"),l.a.createElement("td",null,a)),l.a.createElement("tr",null,l.a.createElement("td",null,"Director"),l.a.createElement("td",null,r)),l.a.createElement("tr",null,l.a.createElement("td",null,"Language"),l.a.createElement("td",null,s)),l.a.createElement("tr",null,l.a.createElement("td",null,"Metascore"),l.a.createElement("td",null,o)),l.a.createElement("tr",null,l.a.createElement("td",null,"Production"),l.a.createElement("td",null,u)),l.a.createElement("tr",null,l.a.createElement("td",null,"Rated"),l.a.createElement("td",null,d)),l.a.createElement("tr",null,l.a.createElement("td",null,"Response"),l.a.createElement("td",null,E)),l.a.createElement("tr",null,l.a.createElement("td",null,"Type"),l.a.createElement("td",null,b)),l.a.createElement("tr",null,l.a.createElement("td",null,"Website"),l.a.createElement("td",null,l.a.createElement("a",{href:f,target:"_blank",rel:"noopener noreferrer"},h))),l.a.createElement("tr",null,l.a.createElement("td",null,"Writer"),l.a.createElement("td",null,g)),l.a.createElement("tr",null,l.a.createElement("td",null,"imdbVotes"),l.a.createElement("td",null,O)))))))}}]),t}(n.Component)),I=Object(f.b)(function(e){return{movieDetails:e.movies.movieDetails}},{getMovieDetails:function(e){return function(t){N.a.get("http://www.omdbapi.com/?i=".concat(e,"&apikey=13b1230d&plot=full")).then(function(e){t({type:"GET_MOVIE_DETAILS",payload:e.data})})}}})(T),_=a(14),M=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,{store:b},l.a.createElement(g.a,null,l.a.createElement("div",{className:"fade-in"},l.a.createElement(y,null),l.a.createElement("div",{className:"container"},l.a.createElement(_.c,null,l.a.createElement(_.a,{exact:!0,path:"/",component:S}),l.a.createElement(_.a,{exact:!0,path:"/moviedetails/:id",component:I}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.84f69f1c.chunk.js.map