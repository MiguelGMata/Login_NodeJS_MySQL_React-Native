const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;

module.exports=()=> {
    const regex_service = {
        regexUserSignUp:  async(data)=>{
            if (data.lastName == null || data.lastName == "") {
                return("Les champs  nom n'est pas renseignés , veuillez recommencer.'")
            }else if (data.firstName == null || data.firstName == "") {
                return("Le champ prenom n'est pas renseignés , veuillez recommencer.")
            }else if (!EMAIL_REGEX.test(data.email)) {
                return("L'email n'est pas valide, veuillez recommencer.");
            }else if (!PASSWORD_REGEX.test(data.password)) {
                return("Mot de passe invalide (doit avoir une longueur de 4 à 8 caractères et inclure au moins un chiffre");
            }
        },
        regexUserSignIn:  async(data)=>{
            if (data.email == null || data.email == "") {
                return("Les champs e-mail est manquants, veuillez recommencer.");
            }else if (data.password == null || data.password == "") {
                return("Les champs mot de passes est manquants, veuillez recommencer.");
            }else if (!EMAIL_REGEX.test(data.email)) {
                return("L'email n'est pas valide, veuillez recommencer.");
            }else if (!PASSWORD_REGEX.test(data.password)) {
                return("Mot de passe invalide (doit avoir une longueur de 4 à 8 caractères et inclure au moins un chiffre");
            }
        }
    }
    return regex_service
}
