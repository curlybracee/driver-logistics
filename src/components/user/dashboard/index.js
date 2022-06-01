import Dashboard from "./Dashboard";


export default Dashboard


var otpno = '472898';
var dataInfo1 = ['ismail', '9747453832', '906984965422', 'cheruthazham', 'valapattanam', 25];
var data = dataInfo1;
var portdc = 10; /* Azhikkal 10 */
var zone_id = 1; /* Winner 17 Jazz 5*/
var txt_ton = 5; /* Ton 3 5 10 */
var vehicle_type = 1; /* Zone Lorry 1 , Other Lorry 2*/
var name = data[0];
var phoneno = data[1];
var adhar_no = data[2];
var place = data[3];
var route = data[4];
var distance = data[5];
var src = $('#capchaimg').attr('src');
var captcha = src.split('id=')[1];
$("#trotp").hide();
$("#trphoneno").hide();
$("#trportid").hide();
$("#trzoneid").hide();
$("#trtonid").hide();
$("#trvctype").hide();
$("#trotpenter").hide();
$("#spotenter").show();
$('#txt_phone1').val(phoneno);
$('#portdc1').val(portdc);
$('#txt_ton1').val(txt_ton);
$('#vehicle_type1').val(vehicle_type);
$('#txt_otp').val(otpno);
$('#txt_username').val(name);
$('#txt_phone').val(phoneno);
$('#portdc').val(portdc);
$('#zone_id').val(zone_id);
$('#txt_ton').val(txt_ton);
$('#vehicle_type').val(vehicle_type);
$('#hid_otp').val(otpno);
$('#txt_adhaar').val(adhar_no);
$('#txt_place').val(place);
$('#txt_route').val(route);
$('#txt_distance').val(distance);
$('#captcha').val(captcha);
$('#btn_change').click();