let target = document.getElementById('target')

var loopParents = function (el, forParent) {
    var node = el,i = 0;
    while (node != null) {
        node = node.parentNode;
        if(node){
            if(forParent.call(node, node, i, el)){
                return false;
            }
        }
        i += 1;
    }
    return true;
};

var getAllParents = function (child) {
    var parents = [];
    loopParents(child, function(el, i){
        if(el.className==='flex'){
            parents.push(el);
        }else{
            return parents;;
        }
        return false;
    });
   
    return parents;
}

console.log(getAllParents(target));