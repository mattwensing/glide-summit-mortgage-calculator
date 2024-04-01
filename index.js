(()=>{var w=Object.defineProperty,x=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var g=(t,e,n)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,l=(t,e)=>{for(var n in e||(e={}))L.call(e,n)&&g(t,n,e[n]);if(d)for(var n of d(e))M.call(e,n)&&g(t,n,e[n]);return t},f=(t,e)=>x(t,b(e));var u=(t,e,n)=>new Promise((m,a)=>{var i=r=>{try{s(n.next(r))}catch(p){a(p)}},o=r=>{try{s(n.throw(r))}catch(p){a(p)}},s=r=>r.done?m(r.value):Promise.resolve(r.value).then(i,o);s((n=n.apply(t,e)).next())});function h(t){return t instanceof Date?t.toISOString():Array.isArray(t)?t.map(h):t}function N(t,e){return u(this,null,function*(){var s;let{data:{key:n,params:m}}=t,a,i;try{a=yield e(...m)}catch(r){a=void 0;try{i=r.toString()}catch(p){i="Exception can't be stringified."}}let o={key:n};a!==void 0&&(a=h(a),o.result={type:"string",value:a}),i!==void 0&&(o.error=i),((s=t.source)==null?void 0:s.postMessage).call(s,o,"*")})}function C(t){return typeof window!="undefined"&&window.addEventListener("message",e=>N(e,t.run)),f(l({},t),{json:JSON.stringify(_(t),null,2)})}var S=`
        <svg
          width="48"
          height="48"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.85L14.3 0V7.29C14.3 11.4653 11.0406 14.85 7.02 14.85H0Z"
            fill="currentColor"
          />
          <path
            d="M11.7 19.71C11.7 15.5347 14.9594 12.15 18.98 12.15H26L11.7 27V19.71Z"
            fill="currentColor"
          />
        </svg>
    `,D=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function _(t){let{name:e,description:n,author:m,result:a,params:i,about:o,video:s}=t,{icon:r=D}=t;return r==="glide"&&(r=S),{name:e,description:n,author:m,result:a,about:o,icon:r,video:s,params:Object.entries(i).map(([p,c])=>l({name:p},c))}}var v={timeoutSeconds:3600};function P(t){return(new Date().getTime()-t.getTime())/1e3}var y=class{constructor(e=v){this.cache=new Map;this.props=l(l({},e),v)}get(e){return u(this,null,function*(){var a;let{timestamp:n,item:m}=(a=this.cache.get(e))!=null?a:{timestamp:new Date(0)};if(P(n)<this.props.timeoutSeconds)return m;this.cache.delete(e)})}getWith(e,n){return u(this,null,function*(){var i;let{timestamp:m,item:a}=(i=this.cache.get(e))!=null?i:{timestamp:new Date(0)};if(P(m)<this.props.timeoutSeconds)return a;{let o=yield n(e);return this.set(e,o),o}})}set(e,n){return this.cache.set(e,{timestamp:new Date,item:n})}fetch(m){return u(this,arguments,function*(e,n=e){return yield this.getWith(n,()=>fetch(e).then(a=>a.json()))})}};var I=new y,Z=C({name:"Mortgage Calculator",description:"Calculates total costs of refinancing based on market assumptions.",author:"Matt Wensing <matt@usesummit.com>",params:{summitApiKey:{displayName:"Summit API Key",type:"string"},purchasePrice:{displayName:"Purchase Price",type:"number"},loan:{displayName:"Loan Amount",type:"number"},rate:{displayName:"Interest Rate (%)",type:"number"},homePrice:{displayName:"Home Price",type:"number"},homeAppreciation:{displayName:"Home Appreciation Rate (%)",type:"number"},additionalMonthlyPayment:{displayName:"Additional Monthly Payment",type:"number"},years:{displayName:"Loan Term (Years)",type:"number"},propertyTaxRate:{displayName:"Property Tax Rate (%)",type:"number"},propTaxIncreaseRate:{displayName:"Property Tax Increase Rate (%)",type:"number"},taxDiscountRate:{displayName:"Tax Discount Rate (%)",type:"number"}},result:{type:"string"},run(t,e,n,m,a,i,o,s,r,p){return u(this,null,function*(){if(t.value===void 0)return;let c=`https://api.usesummit.com/v1/free-calculators/b79052/the-home-mortgage-calculator/data/?api_key=${p}`,T=yield I.fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({parameters:{loan:t.value,rate:e.value,home_price:n.value,home_appreciation:m.value,additional_monthly_payment:a.value,years:i.value,property_tax_rate:o.value,prop_tax_increase_rate:s.value,tax_discount_rate:r.value}})});return JSON.stringify(T)})}});})();
//# sourceMappingURL=index.js.map
