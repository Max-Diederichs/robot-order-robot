var selected = '';
form.getComponent('zustaendigkeiten_Panel').visible = true;

if(instance.parent.components[0].errors.length === 0){
  var url = window.location.origin;
  console.log(url);
  var hash =  window.location.hash;
  console.log(hash);
  var pathname =  window.location.pathname;
  console.log(patchname);
  if(url == "https://backend-govforms.service.wirtschaft.nrw"){
  
    //form.io
    if(hash.includes('project')){
      var auswahl = data.leistung_Radio;
      selected = component.attributes[auswahl];
      var link = url + "/#/project/5fabf1a524ab885a1f75319f/form/" + selected+"/";
      
    //launch
    } else if(pathname.includes('dev-')) {
        var link = url + "/dev-qxixbggyuynfgel/manage/view/#/form/" + data.leistung_Radio+"/";
    }
    
  //plattform.sh
  } else if(url == "https://wsp-frontend.develop.wspdev.de"){
    var link = url + "/antrag/" + data.leistung_Radio+"/";
    console.log("dev");
  
  //KRZ
  } else if(url == "https://wsp-frontend.staging.wsp.owl-it.de"){
  var link = url + "/antrag/" + data.leistung_Radio+"/";

  //wsp
  } else if(url == "https://service.wirtschaft.nrw"){
    var link = url + "/antrag/" + data.leistung_Radio+"/";
  }
  
  //stage
  else if(url == "https://www.staging-5em2ouy-ljhiuew5uktdu.eu-4.platformsh.site"){
    var link = url + "/antrag/" + data.leistung_Radio+"/";
  }
  
  //window.location.href = link;
  console.log(link);
}else{
  console.log("error")
}
