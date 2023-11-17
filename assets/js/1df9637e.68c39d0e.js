"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1654],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6512:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],s={title:"Cost: Complexity Analysis",description:"Computes the asymptotic complexity of functions with respect to execution cost or other user defined resources. Can be used to detect changes in the complexity with `infer reportdiff`."},l=void 0,c={unversionedId:"checker-cost",id:"checker-cost",title:"Cost: Complexity Analysis",description:"Computes the asymptotic complexity of functions with respect to execution cost or other user defined resources. Can be used to detect changes in the complexity with `infer reportdiff`.",source:"@site/docs/checker-cost.md",sourceDirName:".",slug:"/checker-cost",permalink:"/docs/next/checker-cost",draft:!1,tags:[],version:"current",frontMatter:{title:"Cost: Complexity Analysis",description:"Computes the asymptotic complexity of functions with respect to execution cost or other user defined resources. Can be used to detect changes in the complexity with `infer reportdiff`."},sidebar:"docs",previous:{title:"Config Impact Analysis",permalink:"/docs/next/checker-config-impact-analysis"},next:{title:"Datalog-based points-to analysis",permalink:"/docs/next/checker-datalog"}},p={},u=[{value:"How the analysis works",id:"how-the-analysis-works",level:2},{value:"Types of resources/costs",id:"types-of-resourcescosts",level:2},{value:"Examples (execution cost)",id:"examples-execution-cost",level:2},{value:"Differential mode",id:"differential-mode",level:2},{value:"Limitations",id:"limitations",level:2},{value:"List of Issue Types",id:"list-of-issue-types",level:2}],d={toc:u},m="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Computes the asymptotic complexity of functions with respect to execution cost or other user defined resources. Can be used to detect changes in the complexity with ",(0,a.kt)("inlineCode",{parentName:"p"},"infer reportdiff"),"."),(0,a.kt)("p",null,"Activate with ",(0,a.kt)("inlineCode",{parentName:"p"},"--cost"),"."),(0,a.kt)("p",null,"Supported languages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),(0,a.kt)("li",{parentName:"ul"},"C#/.Net: No"),(0,a.kt)("li",{parentName:"ul"},"Erlang: No"),(0,a.kt)("li",{parentName:"ul"},"Hack: Experimental"),(0,a.kt)("li",{parentName:"ul"},"Java: Yes"),(0,a.kt)("li",{parentName:"ul"},"Python: No")),(0,a.kt)("p",null,"Cost analysis statically estimates an upper bound on the worst-case execution cost of a program (WCET). This page gives an overview of how the analysis works for ",(0,a.kt)("em",{parentName:"p"},"Java")," code. The analyser also has limited support for C/C++ and Objective-C."),(0,a.kt)("p",null,"To run the analysis, you can use run ",(0,a.kt)("inlineCode",{parentName:"p"},"infer --cost")," (which will run cost analysis along with other\nanalyses that are run by default) or ",(0,a.kt)("inlineCode",{parentName:"p"},"infer --cost-only")," (which will only run cost analysis)."),(0,a.kt)("p",null,"For example, the command ",(0,a.kt)("inlineCode",{parentName:"p"},"infer --cost-only -- javac File.java")," will run\ncost analysis on ",(0,a.kt)("inlineCode",{parentName:"p"},"File.java"),"."),(0,a.kt)("h2",{id:"how-the-analysis-works"},"How the analysis works"),(0,a.kt)("p",null,"The analysis computes symbolic upper bounds on the resource usage of programs\u2014-execution cost being the main resource we consider. These costs are expressed in terms of polynomials describing the asymptotic complexity of procedures with respect to their input sizes. The main input of the analysis is the source file which is then translated to an intermediate language along with the control-flow graph of the program. The analysis then operates on this intermediate language in several phases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1) a numerical value analysis based on ",(0,a.kt)("a",{parentName:"li",href:"/docs/checker-bufferoverrun"},"InferBo")," computes value ranges for instructions accessing memory"),(0,a.kt)("li",{parentName:"ul"},"2) a loop bound analysis determines upper bounds for the number of iterations of loops and generates constraints for nodes in the control-flow graph"),(0,a.kt)("li",{parentName:"ul"},"3) a constraint solving step resolves the constraints generated in the second step and computes an upper bound on the execution cost.")),(0,a.kt)("p",null,"Most ideas behind this analysis are based on Stefan Bydge's PhD thesis ",(0,a.kt)("a",{parentName:"p",href:"https://www.semanticscholar.org/paper/Static-WCET-Analysis-Based-on-Abstract-and-Counting-Bygde/ee5157164d497725c1f42dc6c475a59a87c99957"},"Static WCET Analysis based on Abstract Interpretation and Counting of Elements"),"."),(0,a.kt)("p",null,"The analysis computes two things for each node in the CFG:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the cost of its instructions, i.e. how much one execution of this node costs,"),(0,a.kt)("li",{parentName:"ul"},"how many times it can be executed (part 2 above)")),(0,a.kt)("p",null,"The total cost of the node is the scalar product of these two vectors. Then, these are passed to a constraint solver (part 3 above) that computes the execution cost of the procedure based on the incoming/outgoing edges."),(0,a.kt)("p",null,"The results of the analysis are written into ",(0,a.kt)("inlineCode",{parentName:"p"},"costs-report.json")," where for each procedure, we record the actual polynomial (for the execution cost) along with the degree of the polynomial, the procedure name, line number etc."),(0,a.kt)("h2",{id:"types-of-resourcescosts"},"Types of resources/costs"),(0,a.kt)("p",null,"Although the analysis was initially designed to reason about the execution cost, it is not limited to inferring bounds for just execution cost. In order to statically detect regressions in other types of resource usage, we have generalized the analysis to account costs for different types of resources such as Objective-C's autorelease pool size or memory allocations."),(0,a.kt)("p",null,"Currently, there are three types of resources/costs the analysis operates on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1) execution cost"),(0,a.kt)("li",{parentName:"ul"},"2) allocation cost"),(0,a.kt)("li",{parentName:"ul"},"3) autoreleasepool size")),(0,a.kt)("p",null,"For 1), the analysis assumes a simple sequential model with an abstract cost semantics: each primitive instruction in the intermediate language (SIL) is assumed to incur a unit execution cost. "),(0,a.kt)("p",null,"For 2), the analysis only incurs costs for primitive operations that allocate memory (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"new"),"). This is in experimental mode and hence the results are not written into ",(0,a.kt)("inlineCode",{parentName:"p"},"costs-report.json"),". "),(0,a.kt)("p",null,"For 3), the analysis incurs a cost when objects are added to Objective-C's ",(0,a.kt)("inlineCode",{parentName:"p"},"@autoreleasepool"),". This usually happens in two cases: 1) when ",(0,a.kt)("inlineCode",{parentName:"p"},"autorelease")," is called explicitly in non-ARC compiled code and 2) when an (autoreleased) object pointer is returned from non-ARC compiled callee to ARC compiled caller, and vice-versa. "),(0,a.kt)("h2",{id:"examples-execution-cost"},"Examples (execution cost)"),(0,a.kt)("p",null,"For instance, assume that we had the following program:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"void loop(ArrayList<Integer> list){\n  for (int i = 0; i <= list.size(); i++){\n  }\n}\n")),(0,a.kt)("p",null,"Infer statically infers a polynomial (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"8 \xb7 |list|+16"),") for the execution cost of this program by giving each instruction in Infer's intermediate language a symbolic cost (where ",(0,a.kt)("inlineCode",{parentName:"p"},"|...|")," refers to the length of a list). Here---overlooking the actual constants---the analysis infers that this program\u2019s asymptotic complexity is ",(0,a.kt)("inlineCode",{parentName:"p"},"O(|list|)"),", that is loop is linear in the size of its input list. Then, at diff time, if a developer modifies this code to,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"void loop(ArrayList<Integer> list){\n  for (int i = 0; i <= list.size(); i++){\n    foo(i); // newly added function call\n  }\n}\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," has a linear cost in its parameter, then Infer automatically detects that the complexity of loop has increased from ",(0,a.kt)("inlineCode",{parentName:"p"},"O(|list|)")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"O(|list|^2)")," and then reports an ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/all-issue-types#execution_time_complexity_increase"},(0,a.kt)("inlineCode",{parentName:"a"},"EXECUTION_TIME_COMPLEXITY_INCREASE"))," issue."),(0,a.kt)("h2",{id:"differential-mode"},"Differential mode"),(0,a.kt)("p",null,"Unlike other Infer analyses (which on reports found issues/bugs in ",(0,a.kt)("inlineCode",{parentName:"p"},"report.json")," when running infer once), cost analysis also has a special mode that reports an issue for differential analysis (i.e. when comparing the analysis results on the original and the modified files). For each procedure, ",(0,a.kt)("inlineCode",{parentName:"p"},"costs-report.json")," includes the actual polynomial (for the execution cost) along with the degree of the polynomial, the procedure name, line number etc. Then, in the differential mode, these ",(0,a.kt)("inlineCode",{parentName:"p"},"costs-report.json")," files are compared. "),(0,a.kt)("p",null,"Differential cost analysis in action:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"first run infer's cost analysis on ",(0,a.kt)("inlineCode",{parentName:"li"},"File.java")," and copy ",(0,a.kt)("inlineCode",{parentName:"li"},"inter-out/costs-report.json")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"previous-costs-report.json")," (Note that the file should be copied outside the result directory because the directory will be removed in the second infer run.)"),(0,a.kt)("li",{parentName:"ul"},"modify ",(0,a.kt)("inlineCode",{parentName:"li"},"File.java")," as shown above"),(0,a.kt)("li",{parentName:"ul"},"re-run infer on ",(0,a.kt)("inlineCode",{parentName:"li"},"File.java")," and copy ",(0,a.kt)("inlineCode",{parentName:"li"},"infer-out/costs-report.json")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"current-costs-report.json")),(0,a.kt)("li",{parentName:"ul"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"infer reportdiff --costs-current current-costs-report.json --costs-previous previous-costs-report.json"),"."),(0,a.kt)("li",{parentName:"ul"},"Inspect ",(0,a.kt)("inlineCode",{parentName:"li"},"infer-out/differential/introduced.json")," to see the newly found complexity increase issue(s).")),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"There are a number of known limitations to the design of the static cost analysis:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/checker-bufferoverrun"},"InferBo")," 's intervals are limited to affine expressions, not full-blown polynomials. Hence, we can not automatically infer bounds involving square roots.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We do not handle recursion.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the execution cost of a program depends on an unknown call (e.g. due to iterating over an unmodeled library call), we can't compute a static upper bound and return T (unknown cost). See ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/all-issue-types#infinite_execution_time"},"INFINITE_EXECUTION_COST")," for details."))),(0,a.kt)("h2",{id:"list-of-issue-types"},"List of Issue Types"),(0,a.kt)("p",null,"The following issue types are reported by this checker:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#execution_time_complexity_increase"},"EXECUTION_TIME_COMPLEXITY_INCREASE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#execution_time_complexity_increase_ui_thread"},"EXECUTION_TIME_COMPLEXITY_INCREASE_UI_THREAD")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#execution_time_unreachable_at_exit"},"EXECUTION_TIME_UNREACHABLE_AT_EXIT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#expensive_execution_time"},"EXPENSIVE_EXECUTION_TIME")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#infinite_execution_time"},"INFINITE_EXECUTION_TIME"))))}h.isMDXComponent=!0}}]);