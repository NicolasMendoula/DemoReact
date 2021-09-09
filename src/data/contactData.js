/* Ce fichier permet de mettre en forme le formulaire de contact et la liste des champs */

const contactFields = [ {   name:"nom",
                            type:"text"},
                        {   name:"prenom",
                            type:"text"},
                        {   name:"email",
                            type: "email"},
                        {   name:"objet",
                            type:"select",
                            options: [  "renseignements",
                                        "Devis",
                                        "Rendez-vous"
                                    ]
                        },
                        {   name: "message",
                            type:"textarea"}
                    ]

export default contactFields;