import React from 'react'

const Form2 = (props) => {
    return (
        <div class="pl-lg-4">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group focused">
                        <label class="form-control-label" for="input-address">Dirección</label>
                        <input id="input-address" class="form-control form-control-alternative" placeholder="Home Address" value={props.address} type="text" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="form-group focused">
                        <label class="form-control-label" for="input-city">Ciudad</label>
                        <input type="text" id="input-city" class="form-control form-control-alternative" placeholder="City" value={props.city} />
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group focused">
                        <label class="form-control-label" for="input-country">Pais</label>
                        <input type="text" id="input-country" class="form-control form-control-alternative" placeholder="Country" value={props.country} />
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label class="form-control-label" for="input-country">Código Postal</label>
                        <input type="number" id="input-postal-code" class="form-control form-control-alternative" placeholder="Postal code" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form2
