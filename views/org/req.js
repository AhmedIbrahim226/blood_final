async function get_req(clbck){
    var requests;
    await fetch("/org/show_requests").then(res => res.json()).then((res)=>{
        requests = res;
    });
    clbck(requests);
}
get_req((requests)=>{
    if(requests.data.length == 0){
        var empty = document.createElement("h5");
        empty.setAttribute("style","color:#cf3d3e");
        empty.innerHTML = "Your requests list is empty";
        const element = document.getElementById("box1");
        element.appendChild(empty);

    }else{
    for(var i =0 ;i < requests.data.length ; i++){
        var br = document.createElement("br");
        var br2 = document.createElement("br");
        var br3 = document.createElement("br");
        var br4 = document.createElement("br");
        var br5 = document.createElement("br");
        var br6 = document.createElement("br");
        var br7 = document.createElement("br");
        var br8 = document.createElement("br");


        
        var label_hotspotName = document.createElement("label");
        label_hotspotName.innerHTML = "Hotspot Name ";

        var label_username = document.createElement("label");
        label_username.innerHTML = "User Name ";

        var label_natId = document.createElement("label");
        label_natId.innerHTML = "User National ID ";

        var label_amount = document.createElement("label");
        label_amount.innerHTML = "Amount ";

        var label_reason = document.createElement("label");
        label_reason.innerHTML = "Reason ";

        var label_medical_reason = document.createElement("label");
        label_medical_reason.innerHTML = "medical Reason ";

        var label_type = document.createElement("label");
        label_type.innerHTML = "Blood Type ";

        var label_status = document.createElement("label");
        label_status.innerHTML = "Request Status ";

        const form = document.createElement("form");
        form.setAttribute("method","POST");
        form.setAttribute("action","/org/requests");
        form.setAttribute("style","border-radius:1vw;padding:1vw")

        

        var hotspot_name = document.createElement("input");
        hotspot_name.setAttribute("type", "text");
        hotspot_name.setAttribute("name", "hotspot_name");
        hotspot_name.setAttribute("value",requests.data[i].hotspot_name);
        hotspot_name.setAttribute("readonly","true");

        var user_name = document.createElement("input");
        user_name.setAttribute("type", "text");
        user_name.setAttribute("name", "user_name");
        user_name.setAttribute("value",requests.data[i].user_name);
        user_name.setAttribute("readonly","true");

        var nat = document.createElement("input");
        nat.setAttribute("type", "text");
        nat.setAttribute("name", "nat");
        nat.setAttribute("value", requests.data[i].user_national_id);
        nat.setAttribute("readonly","true");

        var amount = document.createElement("input");
        amount.setAttribute("type", "text");
        amount.setAttribute("name", "amount");
        amount.setAttribute("value", requests.data[i].amount);
        amount.setAttribute("readonly","true");

        var type = document.createElement("input");
        type.setAttribute("type", "text");
        type.setAttribute("name", "type");
        type.setAttribute("value", requests.data[i].type);
        type.setAttribute("readonly","true");

        var reason = document.createElement("input");
        reason.setAttribute("type", "text");
        reason.setAttribute("name", "reason");
        reason.setAttribute("value", requests.data[i].reason);
        reason.setAttribute("readonly","true");

        var medical_reason = document.createElement("input");
        medical_reason.setAttribute("type", "text");
        medical_reason.setAttribute("name", "medical_reason");
        medical_reason.setAttribute("value", requests.data[i].medical_reason);
        medical_reason.setAttribute("readonly","true");

        var status = document.createElement("input");
        status.setAttribute("type", "text");
        status.setAttribute("name", "status");
        status.setAttribute("value", requests.data[i].status);
        status.setAttribute("readonly","true");

        var request_id = document.createElement("input");
        request_id.setAttribute("type", "text");
        request_id.setAttribute("name", "request_id");
        request_id.setAttribute("value", requests.data[i].requestId);
        request_id.setAttribute("hidden","true");
        
        var user_id = document.createElement("input");
        user_id.setAttribute("type", "text");
        user_id.setAttribute("name", "user_id");
        user_id.setAttribute("value", requests.data[i].userId);
        user_id.setAttribute("hidden","true");

        var response = document.createElement("select");
        response.name = "response";
        
        var approve = document.createElement("option");
        approve.text = "Approve"
        approve.value = "accepted";


        var deny = document.createElement("option");
        deny.text = "Deny";
        deny.value = "denied";

        response.appendChild(approve);
        response.appendChild(deny);

        var submit = document.createElement("button");
        submit.setAttribute("type","submit");
        submit.textContent = "Respond";



        form.append(label_hotspotName);
        form.appendChild(hotspot_name);
        form.append(br);

        form.append(label_username);
        form.appendChild(user_name);
        form.append(br2);

        form.append(label_natId);
        form.appendChild(nat);
        form.append(br3);

        form.append(label_amount);
        form.appendChild(amount);
        form.append(br4)

        form.append(label_type);
        form.appendChild(type);
        form.append(br5);

        form.append(label_reason);
        form.appendChild(reason);
        form.append(br6);

        form.append(label_medical_reason);
        form.appendChild(medical_reason);
        form.append(br8);

        form.append(label_status);
        form.appendChild(status);
        form.append(br7);

        form.appendChild(request_id);
        form.appendChild(user_id);

        form.appendChild(response);
        form.appendChild(submit);

        const element = document.getElementById("box1");
        element.appendChild(form);
    }
}

});
get_req((requests)=>{
    if(requests.data2.length == 0){
        var empty = document.createElement("h5");
        empty.setAttribute("style","color:#cf3d3e");
        empty.innerHTML = "Your requests list is empty";
        const element = document.getElementById("box2");
        element.appendChild(empty);

    }else{
    for(var i =0 ;i < requests.data2.length ; i++){
        var br = document.createElement("br");
        var br2 = document.createElement("br");
        var br3 = document.createElement("br");
        var br4 = document.createElement("br");
        var br5 = document.createElement("br");
        var br6 = document.createElement("br");
        var br7 = document.createElement("br");
        var br8 = document.createElement("br");


        
        var label_hotspotName = document.createElement("label");
        label_hotspotName.innerHTML = "Hotspot Name ";

        var label_username = document.createElement("label");
        label_username.innerHTML = "User Name ";

        var label_natId = document.createElement("label");
        label_natId.innerHTML = "User National ID ";

        var label_amount = document.createElement("label");
        label_amount.innerHTML = "Amount ";

        var label_reason = document.createElement("label");
        label_reason.innerHTML = "Reason ";

        var label_medical_reason = document.createElement("label");
        label_medical_reason.innerHTML = "medical Reason ";

        var label_type = document.createElement("label");
        label_type.innerHTML = "Blood Type ";

        var label_status = document.createElement("label");
        label_status.innerHTML = "Request Status ";

        const form = document.createElement("form");
        form.setAttribute("method","POST");
        form.setAttribute("action","/org/requests");
        form.setAttribute("style","border-radius:1vw;padding:1vw")

        

        var hotspot_name = document.createElement("input");
        hotspot_name.setAttribute("type", "text");
        hotspot_name.setAttribute("name", "hotspot_name");
        hotspot_name.setAttribute("value",requests.data2[i].hotspot_name);
        hotspot_name.setAttribute("readonly","true");

        var user_name = document.createElement("input");
        user_name.setAttribute("type", "text");
        user_name.setAttribute("name", "user_name");
        user_name.setAttribute("value",requests.data2[i].user_name);
        user_name.setAttribute("readonly","true");

        var nat = document.createElement("input");
        nat.setAttribute("type", "text");
        nat.setAttribute("name", "nat");
        nat.setAttribute("value", requests.data2[i].user_national_id);
        nat.setAttribute("readonly","true");

        var amount = document.createElement("input");
        amount.setAttribute("type", "text");
        amount.setAttribute("name", "amount");
        amount.setAttribute("value", requests.data2[i].amount);
        amount.setAttribute("readonly","true");

        var type = document.createElement("input");
        type.setAttribute("type", "text");
        type.setAttribute("name", "type");
        type.setAttribute("value", requests.data2[i].type);
        type.setAttribute("readonly","true");

        var reason = document.createElement("input");
        reason.setAttribute("type", "text");
        reason.setAttribute("name", "reason");
        reason.setAttribute("value", requests.data2[i].reason);
        reason.setAttribute("readonly","true");

        var medical_reason = document.createElement("input");
        medical_reason.setAttribute("type", "text");
        medical_reason.setAttribute("name", "medical_reason");
        medical_reason.setAttribute("value", requests.data2[i].medical_reason);
        medical_reason.setAttribute("readonly","true");

        var status = document.createElement("input");
        status.setAttribute("type", "text");
        status.setAttribute("name", "status");
        status.setAttribute("value", requests.data2[i].status);
        status.setAttribute("readonly","true");

        form.append(label_hotspotName);
        form.appendChild(hotspot_name);
        form.append(br);

        form.append(label_username);
        form.appendChild(user_name);
        form.append(br2);

        form.append(label_natId);
        form.appendChild(nat);
        form.append(br3);

        form.append(label_amount);
        form.appendChild(amount);
        form.append(br4)

        form.append(label_type);
        form.appendChild(type);
        form.append(br5);

        form.append(label_reason);
        form.appendChild(reason);
        form.append(br6);

        form.append(label_medical_reason);
        form.appendChild(medical_reason);
        form.append(br8);

        form.append(label_status);
        form.appendChild(status);
        form.append(br7);

        const element = document.getElementById("box2");
        element.appendChild(form);
    }
}
});