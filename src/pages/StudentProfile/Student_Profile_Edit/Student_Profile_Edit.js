import React from 'react';
import Button_Function from '..//..//..//Components/Button/Button_Function/Button_Function';
import Button_Danger from '../../../Components/Button/Button_Danger/Button_Danger';

class Student_Profile_Edit extends React.Component {
    render() {
        return(
            <form className="row">
                <div className="col-8 mb-4 mt-5">
                    <div className="form-group">
                        <label>Namn:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Adress:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>E-mail:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Hemsida:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Hemsida:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Hemsida:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Hemsida:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Om mig:</label>
                        <textarea className="form-control" rows="5" ></textarea>
                    </div>

                    <div className="form-group">
                        <label className="btn btn-default">
                            Profilbild <input type="file" hidden />
                        </label>
                    </div>

                    <Button_Function button_content="Spara" />
                    <Button_Danger url="/login" button_danger_content="Avbryt" />
                </div>
            </form>
        );
    }
}


export default Student_Profile_Edit;