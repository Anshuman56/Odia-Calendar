let submit = document.querySelector('button');
let months = document.getElementById('odia-month');
let p = document.createElement('p');
let h2 = document.createElement('h2');
let content = [
    `ଚୈତ୍ର ମାସରୁ ଓଡ଼ିଆ ନବବର୍ଷ ଆରମ୍ଭ ହୁଏ। ପ୍ରକୃତିରେ ଗ୍ରୀଷ୍ମର ଆଭାସ ଦେଖାଯାଏ।
    ଏହି ମାସର ମୁଖ୍ୟ ପର୍ବ ପଣା ସଂକ୍ରାନ୍ତି, ଯେଉଁଥିରେ ପଣା ପାନୀୟ ତିଆରି କରାଯାଏ।`,
    `ବୈଶାଖ ଭୟଙ୍କର ତାପମାତ୍ରାର ମାସ, ଲୋକମାନେ ଗ୍ରୀଷ୍ମକୁ ଅନୁଭବ କରନ୍ତି।
ଚାଷୀମାନେ ଆଗାମୀ ଚାଷ ପାଇଁ ପ୍ରସ୍ତୁତି ନେବା ଆରମ୍ଭ କରନ୍ତି।`,
`ଜ୍ୟେଷ୍ଠ ମାସରେ ଗ୍ରୀଷ୍ମ ସର୍ବାଧିକ ହୁଏ ଓ ଜଳସଙ୍କଟ ଦେଖାଯାଏ।
ଗ୍ରାମାଞ୍ଚଳରେ ଲୋକେ ବର୍ଷା ପାଇଁ ପ୍ରତୀକ୍ଷା କରନ୍ତି।`,
`ଆଷାଢ଼ ମାସରେ ବର୍ଷା ଆରମ୍ଭ ହୁଏ ଓ ଚାଷ କାମ ଜୋରଦାର ହୁଏ।
ଏହି ମାସର ସର୍ବଶ୍ରେଷ୍ଠ ପର୍ବ ଶ୍ରୀଜଗନ୍ନାଥଙ୍କ ରଥଯାତ୍ରା।`,
`ଶ୍ରାବଣ ମାସ ସମ୍ପୂର୍ଣ୍ଣ ବର୍ଷାପୂର୍ଣ୍ଣ ଓ ସବୁଜିମାରେ ଭରିଯାଏ।
ଝୁଲଣ ଯାତ୍ରା ଓ ଶିବଭକ୍ତି ଏହି ମାସର ବିଶେଷତା।`,
`ଭାଦ୍ରବ ମାସରେ ଧାନ ଗଛ ଭଲ ଭାବେ ବଢ଼ିଥାଏ।
ଜନ୍ମାଷ୍ଟମୀ ଓ ଗଣେଶ ପୂଜା ଏହି ମାସର ମୁଖ୍ୟ ପର୍ବ।`,
`ଆଶ୍ୱିନ ମାସରେ ପରିବେଶ ସୁହାଉନା ହୁଏ ଓ ଖୁସିର ଆମେଜ ରହେ।
ଦୁର୍ଗା ପୂଜା ଓ ବିଜୟା ଦଶମୀ ଏହି ମାସର ପ୍ରମୁଖ ଉତ୍ସବ।`,
`କାର୍ତ୍ତିକ ମାସକୁ ସବୁଠାରୁ ପବିତ୍ର ମାସ ଭାବେ ଗଣାଯାଏ।
କାର୍ତ୍ତିକ ପୂର୍ଣ୍ଣିମା ଓ ବୋଇତ ବନ୍ଦାଣା ଏହି ମାସର ମୁଖ୍ୟ ଆକର୍ଷଣ।`,
`ମାର୍ଗଶିର ମାସରେ ଶୀତ ଆରମ୍ଭ ହୁଏ ଓ ଧାନ କଟା ଆରମ୍ଭ ହୁଏ।
ଗ୍ରାମ ଅଞ୍ଚଳରେ ଚାଷୀମାନେ ନୂଆ ଫସଲର ଆନନ୍ଦ ନେନ୍ତି।`,
`ପୌଷ ଶୀତକାଳର ମୁଖ୍ୟ ମାସ ଓ ପିଠା ପର୍ବର ସମୟ।
ମକର ସଂକ୍ରାନ୍ତି ଏହି ମାସର ପ୍ରଧାନ ପର୍ବ।`,
`ମାଘ ମାସରେ ଶୀତ ଚରମ ସୀମାରେ ପହଞ୍ଚେ।
ବସନ୍ତ ପଞ୍ଚମୀ (ସରସ୍ୱତୀ ପୂଜା) ଏହି ମାସର ମୁଖ୍ୟ ଉତ୍ସବ।`,
`ଫାଲ୍ଗୁନ ମାସରେ ବସନ୍ତ ଋତୁ ଆସେ ଓ ପ୍ରକୃତି ରଙ୍ଗୀନ ହୁଏ।
ଦୋଳ ପୂର୍ଣ୍ଣିମା (ହୋଲି) ଏହି ମାସର ସର୍ବପ୍ରସିଦ୍ଧ ପର୍ବ।`,
]

submit.addEventListener('click', () => {
    let value = months.value;
    
   if(value === ""){
    p.textContent = 'Pleas select a month.'
   } else if(value === 'chaitra'){
   h2.textContent = months.options[months.selectedIndex].text;
    p.textContent = content[0];
   } else if(value === 'baishakha'){
   h2.textContent = months.options[months.selectedIndex].text;
    p.textContent = content[1];
   } else if(value === 'jyeshtha'){
   h2.textContent = months.options[months.selectedIndex].text;
    p.textContent = content[2];
   }else if(value === 'ashadha'){
   h2.textContent = months.options[months.selectedIndex].text;
    p.textContent = content[3];
   }else if(value === 'shravana'){
   h2.textContent = months.options[months.selectedIndex].text;
    p.textContent = content[4];
   }else if(value === 'bhadra'){
   h2.textContent = months.options[months.selectedIndex].text;
    p.textContent = content[5];
   }else if(value === 'ashwina'){
   h2.textContent = months.options[months.selectedIndex].text;
    p.textContent = content[6];
   }else if(value === 'kartika'){
   h2.textContent = months.options[months.selectedIndex].text;
    p.textContent = content[7];
   }else if(value === 'margashira'){
   h2.textContent = months.options[months.selectedIndex].text;
    p.textContent = content[8];
   }else if(value === 'pausha'){
   h2.textContent = months.options[months.selectedIndex].text;
    p.textContent = content[9];
   }else if(value === 'magha'){
   h2.textContent = months.options[months.selectedIndex].text;
    p.textContent = content[10];
   }else if(value === 'phalguna'){
   h2.textContent = months.options[months.selectedIndex].text;
    p.textContent = content[11];
   }
    
    
    document.body.appendChild(h2)
    document.body.appendChild(p);
})