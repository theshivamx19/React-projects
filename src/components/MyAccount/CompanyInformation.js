import React, { useState } from 'react'
import { Button } from 'antd';

const CompanyInformation = ({ propsC, Upload, imageCompanyUrl, uploadButton, Select }) => {
    const optionList = [
        {
            label: "Asia",
            value: "1"
        },
        {
            label: "Europe",
            value: "2"
        }
    ]
    const optionList1 = [
        {
            label: "France",
            value: "1"
        },
        {
            label: "India",
            value: "2"
        },
        {
            label: "London",
            value: "3"
        }
    ]
    const optionList2 = [
        {
            label: "Chennai",
            value: "1"
        },
        {
            label: "Bengaluru",
            value: "2"
        }
    ]
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div>
            <div className='col-12 d-flex justify-content-center mt-3'>
                <h4>COMPANY<span style={{ color: "#bbce00" }}> INFORMATION</span>
                </h4>
            </div>
            <div className='col-12 d-flex flex-md-column flex-xl-column flex-lg-column  flex-sm-column  flex-column'>
                <div className='mt-3 col-md-12 col-12 d-flex flex-column flex-md-row flex-xl-row flex-lg-row justify-content-center gap-5'>
                    <div>
                        <Upload
                            {...propsC}
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader d-flex justify-content-center align-items-center mt-md-2"
                            showUploadList={false}
                        >
                            {imageCompanyUrl ? (
                                <img
                                    src={imageCompanyUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            ) : (
                                uploadButton
                            )}
                        </Upload>
                        <div className="d-flex justify-content-center align-items-center mb-2">Company Logo</div>
                    </div>
                </div>
                <div className='col-12 col-md-9 col-xl-9 col-sm-12 col-lg-9'>
                    <div className="row">
                        <form className="login-form mt-4"
                            // onSubmit={handleSubmit(onSubmit)}
                            encType="multipart/form-data"
                            style={{ paddingRight: "30px", marginTop: "20px" }}>

                            <div className="col-md-12 clearfix mt-3">
                                <div className=" d-flex flex-md-row flex-column flex-xl-row flex-lg-row flex-sm-column single-query">
                                    <div className='col-12 col-xl-6 col-lg-6 col-sm-6 col-md-6'>
                                        <label>Add New Branch</label>
                                    </div>
                                    <div className='col-12 col-xl-6 col-lg-6 col-sm-6 col-md-6'>
                                        <div className="col-md-12 clearfix mt-3">
                                            <div className=" d-flex flex-md-row flex-column flex-xl-row flex-lg-row flex-sm-column single-query gap-3">
                                                <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                    <input type="text"
                                                        className="keyword-input col-12"
                                                        placeholder='Branch Name'
                                                    />
                                                </div>
                                                <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                    <button type="button" class="btn btn-outline-success" onClick={handleClick}>Add</button>
                                                </div>

                                            </div>
                                            {open === true &&
                                                <>
                                                    <div className="col-md-12 clearfix mt-3">
                                                        <div className=" d-flex flex-md-row flex-column flex-xl-row flex-lg-row flex-sm-column single-query gap-3">
                                                            <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                                <input type="text"
                                                                    className="keyword-input col-12"
                                                                    placeholder='Company Name'
                                                                />
                                                            </div>
                                                            <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                                <input type="text"
                                                                    className="keyword-input col-12"
                                                                    placeholder='Address 1'
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 clearfix mt-2">
                                                        <div className=" d-flex flex-md-row flex-column flex-xl-row flex-lg-row flex-sm-column single-query gap-3">
                                                            <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                                <input type="text"
                                                                    className="keyword-input col-12"
                                                                    placeholder='City'
                                                                />
                                                            </div>
                                                            <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                                <Select
                                                                    // styles={styles}
                                                                    className='branchSelect'
                                                                    options={optionList}
                                                                    isSearchable={true}
                                                                    placeholder="Select Continent"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 clearfix mt-2">
                                                        <div className=" d-flex flex-md-row flex-column flex-xl-row flex-lg-row flex-sm-column single-query gap-3">
                                                            <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                                <Select
                                                                    // styles={styles}
                                                                    className='branchSelect'
                                                                    options={optionList1}
                                                                    isSearchable={true}
                                                                    placeholder="Select Country"
                                                                />
                                                            </div>
                                                            <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                                <input type="text"
                                                                    className="keyword-input col-12"
                                                                    placeholder='Zipcode'
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 clearfix mt-3">
                                                        <div className=" d-flex flex-md-row flex-column flex-xl-row flex-lg-row flex-sm-column single-query gap-3">
                                                            <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                                <input type="text"
                                                                    className="keyword-input col-12"
                                                                    placeholder='Latitude'
                                                                />
                                                            </div>
                                                            <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                                <input type="text"
                                                                    className="keyword-input col-12"
                                                                    placeholder='Longitude'
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                        {/* <div className='d-flex flex-row'>
                                            <div className='col-12 col-xl-6 col-lg-6 col-sm-6 col-md-6'>
                                                <input type="text"
                                                    placeholder='Branch Name'
                                                    className="keyword-input col-12"
                                                />
                                            </div>
                                            <button type="button" class="btn btn-outline-success" onClick={handleClick}>Add</button>
                                        </div>
                                        {open === true &&
                                            <>
                                                <div className="col-md-12 clearfix mt-3">
                                                    <div className=" d-flex flex-md-row flex-column flex-xl-row flex-lg-row flex-sm-column single-query gap-3">
                                                        <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                            <input type="text"
                                                                className="keyword-input col-12"
                                                                placeholder='Company Name'
                                                            />
                                                        </div>
                                                        <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                            <input type="text"
                                                                className="keyword-input col-12"
                                                                placeholder='Address 1'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 clearfix mt-2">
                                                    <div className=" d-flex flex-md-row flex-column flex-xl-row flex-lg-row flex-sm-column single-query gap-3">
                                                        <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                            <input type="text"
                                                                className="keyword-input col-12"
                                                                placeholder='City'
                                                            />
                                                        </div>
                                                        <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                            <Select
                                                                // styles={styles}
                                                                className='branchSelect'
                                                                options={optionList}
                                                                isSearchable={true}
                                                                placeholder="Select Continent"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 clearfix mt-2">
                                                    <div className=" d-flex flex-md-row flex-column flex-xl-row flex-lg-row flex-sm-column single-query gap-3">
                                                        <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                            <Select
                                                                // styles={styles}
                                                                className='branchSelect'
                                                                options={optionList}
                                                                isSearchable={true}
                                                                placeholder="Select Country"
                                                            />
                                                        </div>
                                                        <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                            <input type="text"
                                                                className="keyword-input col-12"
                                                                placeholder='Zipcode'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 clearfix mt-3">
                                                    <div className=" d-flex flex-md-row flex-column flex-xl-row flex-lg-row flex-sm-column single-query gap-3">
                                                        <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                            <input type="text"
                                                                className="keyword-input col-12"
                                                                placeholder='Latitude'
                                                            />
                                                        </div>
                                                        <div className='col-12 col-xl-8 col-lg-8 col-sm-8 col-md-8'>
                                                            <input type="text"
                                                                className="keyword-input col-12"
                                                                placeholder='Longitude'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        } */}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-12 clearfix mt-3">
                                <div className=" d-flex flex-md-row flex-column flex-xl-row flex-lg-row flex-sm-column single-query">
                                    <div className='col-12 col-xl-6 col-lg-6 col-sm-6 col-md-6'>
                                        <label>Headquarter</label>
                                    </div>
                                    <div className='col-12 col-xl-6 col-lg-6 col-sm-6 col-md-6'>
                                        <Select
                                            // styles={styles}
                                            className='branchSelect'
                                            options={optionList2}
                                            isSearchable={true}
                                            placeholder="Select HQ"
                                        // onChange={(value) => {
                                        //   setIdCategory(value.value);
                                        //   setidCatError(false);
                                        // }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 clearfix mt-3">
                                <div className=" d-flex flex-md-row flex-column flex-xl-row flex-lg-row flex-sm-column single-query">
                                    <div className='col-12 col-xl-6 col-lg-6 col-sm-6 col-md-6'>
                                        <label>Website URL</label>
                                    </div>
                                    <div className='col-12 col-xl-6 col-lg-6 col-sm-6 col-md-6'>
                                        <input type="text"
                                            className="keyword-input col-12"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 clearfix mt-3">
                                <div className=" d-flex flex-md-row flex-column flex-xl-row flex-lg-row flex-sm-column single-query">
                                    <div className='col-12 col-xl-6 col-lg-6 col-sm-6 col-md-6'>
                                        <label>Company Description</label>
                                    </div>
                                    <div className='col-12 col-xl-6 col-lg-6 col-sm-6 col-md-6'>
                                        <textarea id="w3review" name="w3review" rows="4" cols="50">
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 d-flex justify-content-end mb-4 mt-3'>
                                <button type="submit" className="text-white btn btn-sm readmorebtn mr-2">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyInformation


