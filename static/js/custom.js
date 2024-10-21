$(document).ready(function(){
    $('.add_to_cart').on('click',function(e){
        e.preventDefault();
        food_id=$(this).attr('data-id');
        url=$(this).attr('data-url');
        data={
            'food_id':food_id,
        }
        $.ajax({
            type:'GET',
            url:url,
            data:data,
            success:function(response){
                if(response.status=='login_required'){
                    swal (response.message,'','info').then(function(){
                        window.location='/accounts/login';
                    })
                }else if(response.status=='Failed'){
                    swal (response.message,'','error')
                }else{
                    $('#cart_counter').html(response.cart_counter['cart_count'])
                    $('#qty-'+food_id).html(response.qty)
                    //subtotal,tax,total
                    applyCartAmounts(
                        response.cart_amount['subtotal'],
                        response.cart_amount['tax_dict'],
                        response.cart_amount['grand_total'],
    
                        ) 
                    

                }
                
            }
        })
        
    })
})
