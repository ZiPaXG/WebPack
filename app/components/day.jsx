const React = require("react");
const LessonRow = require("./lesson.jsx").Lesson;
class Day extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return <table>
                    {
                        this.props.currentDate == this.props.dayName ? <thead className="theadDay active">
                            <tr>
                                <th colSpan={2} className="textCenter">{this.props.dayName}</th>
                            </tr>
                        </thead> : <thead className="theadDay">
                            <tr>
                                <th colSpan={2} className="textCenter">{this.props.dayName}</th>
                            </tr>
                        </thead> 
                    }
                    <tbody>
                        {
                            // в цикле выполним создание Lesson объектов
                            ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"].map(
                                function(time, index)
                                {
                                    return <LessonRow time={time} subject={" "} key={"lesson-row-"+index}/>
                                }
                            )
                        }
                    </tbody>
               </table>
    }
}

module.exports.Day = Day;