const React = require("react");
const Header = require("./header.jsx").Header;
const Day = require("./day.jsx").Day;

function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null :
      ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'][dayOfWeek];
};

class SheduleTable extends React.Component {

    render()
    {
        return <div>
            <div className="sheduleTable">
                <Header head="Расписание на неделю" name="Шепелев Даниил Дмитриевич" date={getDayOfWeek(Date.now())}/>
                <div className="daysTable">
                    {
                        ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"].map(
                            function(dayName, index)
                            {
                                return <Day dayName={dayName} currentDate={getDayOfWeek(Date.now())} key={"shedule-row-"+index}/>;
                            }
                        )
                    }
                </div>

            </div>
        </div>;
    }
}

module.exports.SheduleTable = SheduleTable; 