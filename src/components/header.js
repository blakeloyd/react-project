import React from 'react';

function Header() {
    return(
    <>
        <div class="container-fluid bg-white nav-border high-z">
            <div class="container-h">
                <nav class="navbar navbar-expand-lg navbar-light position-relative">
                    <a class="navbar-brand" href="#"><i class="fa fa-tag"></i> LOGO<span class="sr-only">(current)</span></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarToggleMenu">
                        <div class="d-flex flex-column flex-lg-row w-100">
                            <div class=" col-12 col-lg-6 d-flex flex-row">
                                <span class="nav-item">
                                    <a role="button" id="catButton" class="btn">
                                        <i class="fas fa-th-large"></i> Categories <i class="fas fa-sign-in-alt-lg"></i>
                                    </a>
                                </span>
                            </div>
                            <div class="col-12 col-lg-6 d-flex flex-row justify-content-end align-items-center">
                                <div class="nav-item">
                                    <a role="button" id="cartButton" class="btn pe-5">
                                        <i class="fas fa-shopping-cart"></i>
                                    </a>
                                </div>
                                <a role="button" id="loginButton" class="login-h ps-5 pe-4 btn">
                                    Login
                                </a>
                                <button class="btn btn-primary">Sign-up</button>
                            </div>
                        </div>
                    
                    </div>
                </nav>
            </div>
        </div>
        <div id="catModal" class="modal modal-cat" role="dialog">
            <div class="modal-dialog modal-dialog-full-width bg-white" role="document">
                <div class="modal-content modal-content-full-width">
                    <div class="container-h">
            
                                <div class="accordion d-flex flex-wrap mt-5 py-5" id="accordionExample">
                                    <div class="cat-accordion-item col-12 col-md-4 col-xl-2">
                                        <div class="accordion-header" id="headingTwo">
                                            <button class="cat-button collapsed d-md-block md-disabled" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Category1
                                            </button>
                                        </div>
                                        <div id="collapseOne" class="accordion-collapse collapse d-md-block" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="cat-accordion-body">
                                                <ul class="cat-ul">
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory1</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-primary text-center">
                                                                        <i class="fas fa-shopping-bag text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory2</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-primary text-center">
                                                                        <i class="fas fa-suitcase text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory3</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-primary text-center">
                                                                        <i class="fas fa-suitcase-rolling text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory4</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-primary text-center">
                                                                        <i class="fas fa-shopping-bag text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory5</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-primary text-center">
                                                                        <i class="fas fa-suitcase text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cat-accordion-item col-12 col-md-4 col-xl-2">
                                        <div class="accordion-header" id="headingTwo">
                                            <button class="cat-button collapsed d-md-block md-disabled" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Category2
                                            </button>
                                        </div>
                                        <div id="collapseOne" class="accordion-collapse collapse d-md-block" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="cat-accordion-body">
                                                <ul class="cat-ul">
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory1</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-info text-center">
                                                                        <i class="fas fa-shopping-bag text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory2</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-info text-center">
                                                                        <i class="fas fa-suitcase text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory3</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-info text-center">
                                                                        <i class="fas fa-suitcase-rolling text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cat-accordion-item col-12 col-md-4 col-xl-2">
                                        <div class="accordion-header" id="headingTwo">
                                            <button class="cat-button collapsed d-md-block md-disabled" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Category3
                                            </button>
                                        </div>
                                        <div id="collapseOne" class="accordion-collapse collapse d-md-block" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="cat-accordion-body">
                                                <ul class="cat-ul">
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory1</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-danger text-center">
                                                                        <i class="fas fa-shopping-bag text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory2</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-danger text-center">
                                                                        <i class="fas fa-suitcase text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory3</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-warning text-center">
                                                                        <i class="fas fa-suitcase-rolling text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory4</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-warning text-center">
                                                                        <i class="fas fa-suitcase text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cat-accordion-item col-12 col-md-4 col-xl-2">
                                        <div class="accordion-header" id="headingTwo">
                                            <button class="cat-button collapsed d-md-block md-disabled" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Category4
                                            </button>
                                        </div>
                                        <div id="collapseOne" class="accordion-collapse collapse d-md-block" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="cat-accordion-body">
                                                <ul class="cat-ul">
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory1</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-primary text-center">
                                                                        <i class="fas fa-shopping-bag text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory2</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-primary text-center">
                                                                        <i class="fas fa-suitcase text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory3</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-primary text-center">
                                                                        <i class="fas fa-suitcase-rolling text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cat-accordion-item col-12 col-md-4 col-xl-2">
                                        <div class="accordion-header" id="headingTwo">
                                            <button class="cat-button collapsed d-md-block md-disabled" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Category5
                                            </button>
                                        </div>
                                        <div id="collapseOne" class="accordion-collapse collapse d-md-block" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="cat-accordion-body">
                                                <ul class="cat-ul">
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory1</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-success text-center">
                                                                        <i class="fas fa-shopping-bag text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory2</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-success text-center">
                                                                        <i class="fas fa-suitcase text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cat-accordion-item col-12 col-md-4 col-xl-2">
                                        <div class="accordion-header" id="headingTwo">
                                            <button class="cat-button collapsed d-md-block md-disabled" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Category6
                                            </button>
                                        </div>
                                        <div id="collapseOne" class="accordion-collapse collapse d-md-block" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="cat-accordion-body">
                                                <ul class="cat-ul">
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory1</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-info text-center">
                                                                        <i class="fas fa-shopping-bag text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory2</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-info text-center">
                                                                        <i class="fas fa-suitcase text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory3</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-info text-center">
                                                                        <i class="fas fa-suitcase-rolling text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="cat-li">
                                                        <div class="cat-row">
                                                            <div class="cat-items-wrap">
                                                                <a class="cat-anchor" href="#">Subcategory4</a>
                                                                <div class="cat-i-wrap">
                                                                    <div class="cat-i bg-info text-center">
                                                                        <i class="fas fa-suitcase-rolling text-white"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </div>        
                </div>
            </div>
        </div>
    </>
    )
}

export default Header;