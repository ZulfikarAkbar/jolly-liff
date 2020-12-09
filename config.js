$(".fa").on("click",function(){
    $(this).toggleClass("fa-angle-up");
    $(this).toggleClass("fa-angle-down");
});
function showOrderItems()
{
    if(localStorage.order_data && localStorage.id_order)
    {
        order_data = JSON.parse(localStorage.getItem('order_data'));
        if(order_data.length>0)
        {
            for(i in order_data)
            {
                writeData(
                    order_data[i].id_order,
                    order_data[i].menu_name,
                    order_data[i].qty,
                    order_data[i].price,
                    order_data[i].prices,
                ); 
            } 
        }
    }
}
function resetOrder()
{
    localStorage.clear();
    location.reload();
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
        showOrderItems();
    }
    location.reload();
    return false;
}
function writeData(id,menu_name,qty,price,prices)
{
    var total_price = document.getElementById('total_price');
    var order_table = document.getElementById('order_table');
    var row_table = order_table.insertRow();
    var menu_cell = row_table.insertCell();
    var qty_cell = row_table.insertCell();
    var price_cell = row_table.insertCell();
    var prices_cell = row_table.insertCell();
    var action_cell = row_table.insertCell();

    menu_cell.innerHTML = menu_name;
    qty_cell.innerHTML = qty;
    price_cell.innerHTML = price;
    prices_cell.innerHTML = prices;
    action_cell.innerHTML = 
    '<button id="btn_del" class="btn btn-danger" type="button" onclick="deleteItem(\''+id+'\')"><i class="fa fa-eraser"> Erase</i></button>';
}
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
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
        'prices':parseInt(qty)*parseInt(price)
    };
    order_data.push(objData);
    localStorage.setItem('order_data',JSON.stringify(order_data));
    localStorage.setItem('id_order',id_order);
    document.getElementById('form-data').reset();
    location.reload();
    return false;
}
