import { InputHTMLAttributes } from 'react';

import TextInput from '../TextInput/TextInput';
import Button from '@/components/Action/Button/Button';
import Icon from '@/components/Others/Icon/Icon';

interface DateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'small' | 'medium' | 'large';
}

const DateInput = ({ id, label, size = 'medium', ...props }: DateInputProps) => {
  return (
    <div className="form-group">
      <div className="form-tit">
        <label htmlFor={id}>{label}</label>
      </div>
      <div className="form-conts">
        <div className="form-conts calendar-conts">
          <div className="calendar-input">
            <TextInput
              {...props}
              className="datepicker cal"
              type="number"
              size={size}
              id={id}
              buttons={
                <Button variant="icon" color="none" className="form-btn-datepicker" screenReaderTextForIcon="달력 열기">
                  <Icon name="calendar" />
                </Button>
              }
            />
          </div>
          <div className="krds-calendar-area">
            <div className="calendar-wrap bottom" aria-label="달력" tabIndex={0}>
              <div className="calendar-head">
                <button type="button" className="btn-cal-move prev">
                  <span className="sr-only">이전 달</span>
                </button>
                <div className="calendar-switch-wrap">
                  <div className="calendar-drop-down">
                    <button type="button" className="btn-cal-switch year" aria-label="연도 선택">
                      2024년
                    </button>
                    <div className="calendar-select calendar-year-wrap">
                      <ul className="sel year">
                        <li>
                          <button type="button">2001년</button>
                        </li>
                        <li>
                          <button type="button" className="active">
                            2002년
                          </button>
                        </li>
                        <li>
                          <button type="button" disabled>
                            2003년
                          </button>
                        </li>
                        <li>
                          <button type="button">2004년</button>
                        </li>
                        <li>
                          <button type="button">2005년</button>
                        </li>
                        <li>
                          <button type="button">2006년</button>
                        </li>
                        <li>
                          <button type="button">2007년</button>
                        </li>
                        <li>
                          <button type="button">2008년</button>
                        </li>
                        <li>
                          <button type="button">2009년</button>
                        </li>
                        <li>
                          <button type="button">2010년</button>
                        </li>
                        <li>
                          <button type="button">2011년</button>
                        </li>
                        <li>
                          <button type="button">2012년</button>
                        </li>
                        <li>
                          <button type="button">2013년</button>
                        </li>
                        <li>
                          <button type="button">2014년</button>
                        </li>
                        <li>
                          <button type="button">2015년</button>
                        </li>
                        <li>
                          <button type="button">2016년</button>
                        </li>
                        <li>
                          <button type="button">2017년</button>
                        </li>
                        <li>
                          <button type="button">2018년</button>
                        </li>
                        <li>
                          <button type="button">2019년</button>
                        </li>
                        <li>
                          <button type="button">2020년</button>
                        </li>
                        <li>
                          <button type="button">2021년</button>
                        </li>
                        <li>
                          <button type="button">2022년</button>
                        </li>
                        <li>
                          <button type="button">2023년</button>
                        </li>
                        <li>
                          <button type="button">2024년</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="calendar-drop-down">
                    <button type="button" className="btn-cal-switch month" aria-label="월 선택">
                      12월
                    </button>
                    <div className="calendar-select calendar-mon-wrap">
                      <ul className="sel month">
                        <li>
                          <button type="button" disabled>
                            01월
                          </button>
                        </li>
                        <li>
                          <button type="button">02월</button>
                        </li>
                        <li>
                          <button type="button">03월</button>
                        </li>
                        <li>
                          <button type="button">04월</button>
                        </li>
                        <li>
                          <button type="button">05월</button>
                        </li>
                        <li>
                          <button type="button">06월</button>
                        </li>
                        <li>
                          <button type="button">07월</button>
                        </li>
                        <li>
                          <button type="button">08월</button>
                        </li>
                        <li>
                          <button type="button">09월</button>
                        </li>
                        <li>
                          <button type="button">10월</button>
                        </li>
                        <li>
                          <button type="button">11월</button>
                        </li>
                        <li>
                          <button type="button" className="active">
                            12월
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn-cal-move next">
                  <span className="sr-only">다음 달</span>
                </button>
              </div>
              <div className="calendar-body">
                <div className="calendar-table-wrap">
                  <table className="calendar-tbl">
                    <caption>2024년 12월</caption>
                    <thead>
                      <tr>
                        <th>일</th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="old day-off">
                          <button type="button" className="btn-set-date">
                            <span>26</span>
                          </button>
                        </td>
                        <td className="old">
                          <button type="button" className="btn-set-date">
                            <span>27</span>
                          </button>
                        </td>
                        <td className="old">
                          <button type="button" className="btn-set-date">
                            <span>28</span>
                          </button>
                        </td>
                        <td className="old">
                          <button type="button" className="btn-set-date">
                            <span>29</span>
                          </button>
                        </td>
                        <td className="old">
                          <button type="button" className="btn-set-date">
                            <span>30</span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn-set-date">
                            <span>1</span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn-set-date">
                            <span>2</span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="day-off">
                          <button type="button" className="btn-set-date">
                            <span>3</span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn-set-date">
                            <span>4</span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn-set-date">
                            <span>5</span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn-set-date">
                            <span>6</span>
                          </button>
                        </td>
                        <td className="period start">
                          <button type="button" className="btn-set-date">
                            <span>7</span>
                          </button>
                        </td>
                        <td className="period">
                          <button type="button" className="btn-set-date">
                            <span>8</span>
                          </button>
                        </td>
                        <td className="period">
                          <button type="button" className="btn-set-date">
                            <span>9</span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="period day-off">
                          <button type="button" className="btn-set-date">
                            <span>10</span>
                          </button>
                        </td>
                        <td className="period">
                          <button type="button" className="btn-set-date">
                            <span>11</span>
                          </button>
                        </td>
                        <td className="period">
                          <button type="button" className="btn-set-date">
                            <span>12</span>
                          </button>
                        </td>
                        <td className="period">
                          <button type="button" className="btn-set-date">
                            <span>13</span>
                          </button>
                        </td>
                        <td className="period">
                          <button type="button" className="btn-set-date">
                            <span>14</span>
                          </button>
                        </td>
                        <td className="period">
                          <button type="button" className="btn-set-date">
                            <span>15</span>
                          </button>
                        </td>
                        <td className="period end">
                          <button type="button" className="btn-set-date">
                            <span>16</span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="day-off">
                          <button type="button" className="btn-set-date">
                            <span>17</span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn-set-date">
                            <span>18</span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn-set-date">
                            <span>19</span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn-set-date">
                            <span>20</span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn-set-date">
                            <span>21</span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn-set-date">
                            <span>22</span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn-set-date">
                            <span>23</span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="day-off">
                          <button type="button" className="btn-set-date">
                            <span>24</span>
                          </button>
                        </td>
                        <td className="today">
                          <button type="button" className="btn-set-date">
                            <span>25</span>
                          </button>
                        </td>
                        <td className="day-event">
                          <button type="button" className="btn-set-date">
                            <span>26</span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn-set-date">
                            <span>27</span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn-set-date">
                            <span>28</span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn-set-date">
                            <span>29</span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn-set-date">
                            <span>30</span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="day-off">
                          <button type="button" className="btn-set-date">
                            <span>31</span>
                          </button>
                        </td>
                        <td className="new">
                          <button type="button" className="btn-set-date">
                            <span>1</span>
                          </button>
                        </td>
                        <td className="new">
                          <button type="button" className="btn-set-date">
                            <span>2</span>
                          </button>
                        </td>
                        <td className="new">
                          <button type="button" className="btn-set-date">
                            <span>3</span>
                          </button>
                        </td>
                        <td className="new">
                          <button type="button" className="btn-set-date">
                            <span>4</span>
                          </button>
                        </td>
                        <td className="new">
                          <button type="button" className="btn-set-date">
                            <span>5</span>
                          </button>
                        </td>
                        <td className="new">
                          <button type="button" className="btn-set-date">
                            <span>6</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="calendar-footer">
                <div className="calendar-btn-wrap">
                  <button type="button" className="krds-btn small text" id="get-today">
                    오늘
                  </button>
                  <button type="button" className="krds-btn small tertiary">
                    취소
                  </button>
                  <button type="button" className="krds-btn small primary">
                    확인
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="form-hint">도움말</p>
    </div>
  );
};

export default DateInput;
