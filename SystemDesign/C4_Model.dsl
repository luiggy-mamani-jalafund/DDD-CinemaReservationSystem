workspace "Cinema reservation system" "An application that allows users to book tickets for movies." {

    model {
        stripe = softwareSystem "Payment Service" "Online and in-person payment processing and financial solutions." {
            tags "External Service"
        }
        
        app = softwareSystem "Cinema Reservation System" {
            
            website = container "Website" "The user-facing front-end interface where users can browse movies, make reservations. This container represents the Presentation Layer of the system, which interacts with the API to send and receive data." {
                tags "Presentation Layer"
            }
            
            api = container "API" "The back-end application that handles the core business logic and domain-related operations. It exposes endpoints for the website to interact with the system." {
                tags "Application Layer"
                
                userAuthenticationService = component "User Authentication" "" {
                    tags "Application Layer"
                }
                
                userManagementService = component "User Management" "" {
                    tags "Application Layer"
                }
                
                reservationService = component "Reservation Service" "Handles the reservation-related business logic." {
                    tags "Application Layer"
                }

                paymentService = component "Payment Service" "Handles payment processing for movie reservations." {
                    tags "Application Layer"
                }
                
                movieService = component "Movie Service" "Manages the business logic related to movies, such as retrieving movie listings, and details." {
                    tags "Application Layer"
                }
                
                repository = component "Repository" "Acts as the Data Access Layer, responsible for persisting and retrieving domain objects (e.g., movies, reservations) from the database." {
                    tags "Domain Layer"
                }
                
                movieService -> repository "Fetches movie data from"
                userAuthenticationService -> repository "use"
                userManagementService -> repository "use"
                reservationService -> repository "Handles reservation data through"
                movieService -> reservationService "Interacts with reservation logic to manage availability"
                reservationService -> userManagementService "Interacts with user management logic to manage the reservation"
                reservationService -> paymentService "Interacts with payment methods for reservation"
                paymentService -> stripe "Processes payments through"
            }
            
            db = container "Database" "Represents the data storage layer where movie, reservation, and user information is stored. This is part of the Infrastructure Layer and is abstracted by the repository." {
                tags "Infrastructure Layer"
            }
            
            repository -> db "Uses for data persistence and retrieval"
            website -> reservationService "Interacts with to manage movie reservations"
            website -> movieService "Fetches movie listings and details through"
            website -> userAuthenticationService "Authenticate the user"
            website -> userManagementService "Manage the user account"

        }
        
        user = person "User" "Represents a typical user of the cinema reservation system. The user interacts with the website to browse movies and make reservations." {
            this -> website "Uses to interact with the system"
        }

    }

    views {
        styles {
            element "Person" {
                shape Person
            }
            
            element "Database" {
                shape Cylinder
            }

            element "External Service" {
                background #ffcc00
            }
        }
    }
}
