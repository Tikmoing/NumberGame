function randint(min,max){
    let result;
    result = parseInt( Math.random() * 10000000 ) % (max - min) + min ;
    return result;
}

function getPeOrFix(){
    return Boolean(+$('.btn-on').attr('status'))
}

function check(){
    let nodes = $('.node')
    console.log(nodes.length)
    let first = parseInt($(nodes[0]).val())
    for(let i = 0 ; i < nodes.length ; i ++){
        console.log( parseInt($(nodes[i]).val() ) )
        if(first != parseInt($(nodes[i]).val())){
            return false
        }
    }

    return true;
}

function clear(){
    $('.node').remove();
}

function generate(){
    let numberOfNodes = parseInt( $(".settings-number-input").val() );

    for(let i = 0 ; i < numberOfNodes  ; i ++){
        $(".display-field-node-box").append('<input type="button" class="node" value="1" ptr = "' + i + '">');
        let inNode = $('.node')[i]
        $(inNode).val( randint(1,4) )
    }
    
    $(".node").click(
        function(){
            let inNodeIndex = +$(this).attr('ptr');
            $(this).val( ($(this).val() )%3 + 1 )

            if( getPeOrFix()  ){
                let na = $('.node')[  (inNodeIndex - 1 + numberOfNodes) % numberOfNodes  ];
                let nb = $('.node')[  (inNodeIndex + 1 + numberOfNodes) % numberOfNodes  ];

                $(na).val( ($(na).val() )%3 + 1 )
                $(nb).val( ($(nb).val() )%3 + 1 )

            }else{

                if( inNodeIndex == 0 ){
                    let nb = $('.node')[inNodeIndex + 1];
                    $(nb).val( ($(nb).val() )%3 + 1 )
                }else if(inNodeIndex == numberOfNodes - 1){
                    let na = $('.node')[inNodeIndex - 1];
                    $(na).val( ($(na).val() )%3 + 1 )
                }else{
                    let na = $('.node')[  (inNodeIndex - 1 + numberOfNodes) % numberOfNodes  ];
                    let nb = $('.node')[  (inNodeIndex + 1 + numberOfNodes) % numberOfNodes  ];
    
                    $(na).val( ($(na).val() )%3 + 1 )
                    $(nb).val( ($(nb).val() )%3 + 1 )
                }

            }

            if( check()){ 
                setTimeout(function(){
                    window.alert("Finish!");
                    $(".settings-number-refresh").click() 
                }, 100);
                
                
            }
        }
    )

}





$(".settings-number-refresh").click(
    function(){
        if( parseInt( $(".settings-number-input").val() ) > 20 ){
            window.alert("Please enter less number(must less than 20)!")
        }else{
            clear();
            generate();
        }

    }
)



generate()

