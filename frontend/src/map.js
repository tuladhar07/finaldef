<div class="form-group row">
                                        <label class="col-12 col-sm-3 col-form-label text-sm-right">Pick up
                                            Location</label>
                                        <div class="col-12 col-sm-8 col-lg-6">
                                            <div class="row justify-content-md-center">
                                                <!--<input id="search" style="width: 350px;" type="text">-->
                                                <input data-parsley-type="alphanum" input id="search" type=" text"
                                                    required="" placeholder="" class="form-control" name="location">
                                                <button type="button" class="mt-2 btn btn-primary"
                                                    id="search-button">Search</button>
                                            </div>
                                            <div>
                                                <select id="result-list" class='mt-2' name="latlong"
                                                    onchange="getValue()" style="display:none;width: 300px">
                                                </select>


                                                <div id="map-container"
                                                    style="height: 70vh; width: 50vw; margin-left: -80px" class="mt-2">
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <script src=" https://code.jquery.com/jquery-3.3.1.slim.min.js"
                                        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                                        crossorigin="anonymous">
                                        </script>
                                    <script
                                        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                                        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                                        crossorigin="anonymous"></script>
                                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                                        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                                        crossorigin="anonymous"></script>
                                    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                                        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                                        crossorigin=""></script>
                                    <script src="../js/indexdonor.js">
                                    </script>