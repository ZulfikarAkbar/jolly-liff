// not a function script
$(".fa").on("click",function()
{
    $(this).toggleClass("fa-angle-up");
    $(this).toggleClass("fa-angle-down");
});
if(localStorage.getItem('order_data')==null || JSON.parse(localStorage.getItem('order_data'))==0)
{
    document.getElementById('null_cart').textContent =  'Ooops... your cart is still empty';
    document.getElementById('order_table').style.display="none";
    document.getElementById('row_total_price').style.visibility="hidden";
    document.getElementById('cart_badge').innerHTML = 0;
}
else
{
    document.getElementById('null_cart').style.visibility="hidden";
}
if(localStorage.getItem('fix_order_data')==null || JSON.parse(localStorage.getItem('fix_order_data'))==0)
{
    document.getElementById('null_order').textContent =  'Ooops... you have not order anything yet ';
}
else
{
    document.getElementById('null_order').style.visibility="hidden";
}


// LINE Front-end Framework
const defaultLiffId = "1655335438-X8oEyJAW";
let myLiffId = "";
myLiffId = defaultLiffId;
initializeLiffOrDie(myLiffId);
function initializeLiffOrDie(myLiffId) 
{
    if (!myLiffId) 
    {
        modal_err_liff_id();
    } 
    else 
    {
        initializeLiff(myLiffId);
    }
}
function initializeLiff(myLiffId) 
{
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            initializeApp();
        })
        .catch((err) => {
            modal_err_liff_id();
        });
}
function initializeApp() 
{
    display();
}
function display()
{
    if(liff.isLoggedIn() || liff.isInClient())
    {
        document.getElementById('liffLoginButton').style.visibility="hidden";
        profile();
    }
    if(!liff.isLoggedIn())
    {
        document.getElementById('liffLogoutButton').style.visibility="hidden";
    }
    if(liff.isInClient())
    {
        document.getElementById('dropdown_logout').style.visibility="hidden";
    }
}
function profile()
{
    liff.getProfile()
        .then(profile => {
            document.getElementById('profile_img').src = profile.pictureUrl;
            document.getElementById('profile_name').innerHTML = profile.displayName;
        })
        .catch((err) => {
            console.log('error', err);
        });
}
function logout()
{
    if (liff.isLoggedIn()) 
    {
        liff.logout();
        location.reload();
    }
}
function login()
{
    if (!liff.isLoggedIn())
    {
        liff.login();
    }
}
function openWindowBrowser()
{
    liff.openWindow(
        {
            url: 'https://liff-restaurant.herokuapp.com/', // Isi dengan Endpoint URL aplikasi web Anda
            external: true
        }
    );
}

// modal interface
function modal_err_liff_id()
{
    $("#modal_info").modal('show');
    document.getElementById('modal_title').textContent='ERR_LIFF_ID';
    document.getElementById('modal_body').textContent='Ooops... LIFF ID not found';
    $('#modal_info').on('hidden.bs.modal', function() {
        location.reload();
    });
}
function modal_add_item()
{
    $("#modal_info").modal('show');
    document.getElementById('modal_title').textContent='Success!';
    document.getElementById('modal_body').textContent='Success add this item to cart';
    $('#modal_info').on('hidden.bs.modal', function() {
        location.reload();
    });
}
function modal_delete_item()
{
    $("#modal_info").modal('show');
    document.getElementById('modal_title').textContent='Success!';
    document.getElementById('modal_body').textContent='Success delete this item from cart';
    $('#modal_info').on('hidden.bs.modal', function() {
        location.reload();
    });
}
function modal_reset_cart()
{
    $("#modal_info").modal('show');
    document.getElementById('modal_title').textContent='Success!';
    document.getElementById('modal_body').textContent='Succcss delete all items from cart';
    $('#modal_info').on('hidden.bs.modal', function() {
        location.reload();
    });
}
function modal_discard_send_msg()
{
    $("#modal_info").modal('show');
    document.getElementById('modal_title').textContent='Sorry';
    document.getElementById('modal_body').textContent='You are not using LINE browser, please use that if you want to order';
}
function modal_success_msg(msg)
{
    $("#modal_info").modal('show');
    document.getElementById('modal_title').textContent='Success!';
    document.getElementById('modal_body').textContent=msg;
    $('#modal_info').on('hidden.bs.modal', function() {
        location.reload();
    });
}
function modal_err_msg(err_msg)
{
    $("#modal_info").modal('show');
    document.getElementById('modal_title').textContent='ERR_MESSAGE';
    document.getElementById('modal_body').textContent=err_msg;
    $('#modal_info').on('hidden.bs.modal', function() {
        location.reload();
    });
}

// date function
function created_date()
{
    month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Augu','Sept','Oct','Nov','Dec'];
    date = new Date();
    timestamp = date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear() + " " + date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    return timestamp;
}

// manage user willingness
function showPage(x)
{
    if(x=='showMenu')
    {
        $('#showMenu').show();
        $('#showCart').hide();
    }        
    else if(x=='showCart')
    {
        $('#showMenu').hide();
        $('#showCart').show();
        
    }
}


// many dizzying function but it's work :)
function showOrderItems()
{
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        if(order_data.length>0)
        {
            var total_prices = 0
            for(i in order_data)
            {
                total_prices += order_data[i].prices;
                writeData(
                    order_data[i].id_order,
                    order_data[i].menu_name,
                    order_data[i].qty,
                    order_data[i].price,
                    order_data[i].prices,
                    total_prices,
                    order_data[i].created_date
                ); 
            } 
        }
    }
    return false;
}
function orderNow()
{
    if(!liff.isInClient())
    {
        modal_discard_send_msg();
    }
    else
    {
        if(localStorage.order_data)
        {
            var order_data = JSON.parse(localStorage.getItem('order_data'));
            var id=0;
            var fix_order_data = [];
            if(localStorage.fix_order_data)
            {
                fix_order_data = JSON.parse(localStorage.getItem('fix_order_data'));
                id = fix_order_data.length;
            }
            var objData={
                'id_history':id+1,
                'menu_data':order_data,
                'created_date':created_date()
            };
            fix_order_data.push(objData);
            localStorage.setItem('fix_order_data',JSON.stringify(fix_order_data));
            localStorage.setItem('id',id);
            message_order()
            localStorage.removeItem('order_data');
        }
    }
}

function message_order()
{
    var order_data = JSON.parse(localStorage.getItem('order_data'));
    msg = '';
    if(liff.isInClient())
    {
        msg += 'Thank`s, You just bought something! '
        var total_prices = 0;
        for(i in order_data)
        {
            total_prices = total_prices+order_data[i].prices;
            msg += '(' + order_data[i].qty + 'pcs ' + order_data[i].menu_name + ' with price total = $' + order_data[i].prices + ' ~ ' + '1pcs = $' + order_data[i].price +'), '
        }
        msg+=' with TOTAL ALL = $' + total_prices
        modal_msg = msg + '. Please see your LINE message for your order history.';
        line_msg = '[Order history: ' + created_date() + ']' + ' ' + msg;
        modal_success_msg(modal_msg);
        liff.sendMessages([{
            'type': 'text',
            'text': line_msg
        }]).catch(function(error) {
            err_msg = 'Error sending message: ' + error;
            modal_err_msg(err_msg);
        });
    }
}
function resetCart()
{
    localStorage.removeItem('order_data');
    modal_reset_cart();
    return false;
}
function deleteItem(id)
{
    if (localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        idx_data = 0;
        for (i in order_data)
        {
            if (order_data[i].id_order == id)
            {
                order_data.splice(idx_data, 1);
            }
            idx_data ++;
            
        }
        localStorage.setItem('order_data', JSON.stringify(order_data));
        showPage('showCart');
    }
    modal_delete_item();
    return false;
}
function writeData(id,menu_name,qty,price,prices,total_prices,timestamp)
{
    var total_price = document.getElementById('total_price');
    var order_table = document.getElementById('order_table');
    var row_table = order_table.insertRow();
    var menu_cell = row_table.insertCell();
    var qty_cell = row_table.insertCell();
    var price_cell = row_table.insertCell();
    var prices_cell = row_table.insertCell();
    var date = row_table.insertCell();
    var action_cell = row_table.insertCell();
    

    menu_cell.innerHTML = menu_name;
    qty_cell.innerHTML = qty;
    price_cell.innerHTML = '$'+price;
    prices_cell.innerHTML = '$'+prices;
    total_price.innerHTML = '$'+total_prices;
    action_cell.innerHTML = 
    '<button class="btn btn-danger" type="button" onclick="deleteItem(\''+id+'\')"><i class="fa fa-trash"></i></button>';
    document.getElementById('cart_badge').innerHTML = order_data.length;
    date.innerHTML = timestamp;
}

// sorry for this many function, ok ;)
function addToCart1()
{
    menu_name = document.getElementById('menu_name1').innerHTML;
    qty = $('#qty1').val();
    price = document.getElementById('price1').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}
function addToCart2()
{
    menu_name = document.getElementById('menu_name2').innerHTML;
    qty = $('#qty2').val();
    price = document.getElementById('price2').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}
function addToCart3()
{
    menu_name = document.getElementById('menu_name3').innerHTML;
    qty = $('#qty3').val();
    price = document.getElementById('price3').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}
function addToCart4()
{
    menu_name = document.getElementById('menu_name4').innerHTML;
    qty = $('#qty4').val();
    price = document.getElementById('price4').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}
function addToCart5()
{
    menu_name = document.getElementById('menu_name5').innerHTML;
    qty = $('#qty5').val();
    price = document.getElementById('price5').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}
function addToCart6()
{
    menu_name = document.getElementById('menu_name6').innerHTML;
    qty = $('#qty6').val();
    price = document.getElementById('price6').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}
function addToCart7()
{
    menu_name = document.getElementById('menu_name7').innerHTML;
    qty = $('#qty7').val();
    price = document.getElementById('price7').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}
function addToCart8()
{
    menu_name = document.getElementById('menu_name8').innerHTML;
    qty = $('#qty8').val();
    price = document.getElementById('price8').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}
function addToCart9()
{
    menu_name = document.getElementById('menu_name9').innerHTML;
    qty = $('#qty9').val();
    price = document.getElementById('price9').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}
function addToCart10()
{
    menu_name = document.getElementById('menu_name10').innerHTML;
    qty = $('#qty10').val();
    price = document.getElementById('price10').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}
function addToCart11()
{
    menu_name = document.getElementById('menu_name11').innerHTML;
    qty = $('#qty11').val();
    price = document.getElementById('price11').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}
function addToCart12()
{
    menu_name = document.getElementById('menu_name12').innerHTML;
    qty = $('#qty12').val();
    price = document.getElementById('price12').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}
function addToCart13()
{
    menu_name = document.getElementById('menu_name13').innerHTML;
    qty = $('#qty13').val();
    price = document.getElementById('price13').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}
function addToCart14()
{
    menu_name = document.getElementById('menu_name14').innerHTML;
    qty = $('#qty14').val();
    price = document.getElementById('price14').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}
function addToCart15()
{
    menu_name = document.getElementById('menu_name15').innerHTML;
    qty = $('#qty15').val();
    price = document.getElementById('price15').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}
function addToCart16()
{
    menu_name = document.getElementById('menu_name16').innerHTML;
    qty = $('#qty16').val();
    price = document.getElementById('price16').innerHTML;
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        id_order = JSON.parse(localStorage.getItem('id_order'));
    }
    else
    {
        order_data = []; id_order = 0;
    }
    id_order++;
    objData={
        'id_order':id_order,
        'menu_name':menu_name,
        'qty':parseInt(qty),
        'price':parseInt(price),
        'prices':parseInt(qty)*parseInt(price),
        'created_date':created_date()
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    modal_add_item();
    showPage('showMenu');
    return false;
}