import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { categoryFilter, clearFilter, searchFilter, sortFilter } from '../features/productSlice'


const Sidebar = () => {
    const { category, sort } = useSelector((store) => store.products)
    const dispatch = useDispatch()

    const onChangeSearch = (e) => {
        const value = e.target.value
        dispatch(searchFilter(value))
    }

    const buttonValue = [
        {
            value: 'all',
            name: '全系列'
        },
        {
            value: 'camera',
            name: '相機系列'
        },
        {
            value: 'radio',
            name: '收音機'
        },
        {
            value: 'telephone',
            name: '家用電話'
        },
        {
            value: 'typewriter',
            name: '打字機'
        }

    ]

    return (
        <Wrapper className='product_page-sidebar'>
            <form>
                <div className='sideber search'>
                    <label>
                        <AiOutlineSearch />
                    </label>
                    <input type='text'
                        name='search'
                        placeholder='搜尋'
                        autoComplete='off'
                        onChange={onChangeSearch} />
                </div>

                <div className='sideber categories'>
                    <label>
                        商品類別
                    </label>
                    <div className='btn_container'>
                        {
                            buttonValue.map((item, index) => {
                                return <button
                                    type='button'
                                    value={item.value}
                                    onClick={() => dispatch(categoryFilter(item.value))}
                                    className={category === item.value ? ' sidebar_btn active' : 'sidebar_btn'} key={index}>
                                    {item.name}</button>
                            })
                        }
                    </div>
                </div>

                <div className='sidebar sort'>
                    <label>
                        價格排行
                    </label>
                    <div className='btn_container'>
                        <button type='button'
                            onClick={() => dispatch(sortFilter('lowest'))}
                            className={sort === 'lowest' ? 'sidebar_btn active' : 'sidebar_btn'}>
                            從低到高
                        </button>
                        <button type='button'
                            onClick={() => dispatch(sortFilter('highest'))}
                            className={sort === 'highest' ? 'sidebar_btn active' : 'sidebar_btn'}>
                            從高到低
                        </button>
                    </div>
                </div>
                <button type='button' className='clear_btn' onClick={() => dispatch(clearFilter())}>清除篩選</button>
            </form>
        </Wrapper>
    )
}


const Wrapper = styled.section`
padding: 2rem;

form{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;

    .search{
        display: flex;
        align-items: center;
        label{
            font-size: 2.5rem;
            color: var(--secondary-800);
            margin-right: 1rem;
        }
        input{
            padding:.5rem 1.5rem .5rem 1.5rem;
            border: none;
            background-color: transparent;
            border-bottom: 1px solid var(--secondary-700);
            font-size: 1.6rem;
            width:80%;
            min-width: 10rem;

            &:active,&:focus{
                outline: none;
                background-color: transparent;
            }
        }

    }
    .categories,.sort{
        display: flex;
        flex-direction:column;
        justify-content: flex-start;
        label{
            font-size: 1.5rem;
            color: var(--primary-900);
            font-weight: 600;
            letter-spacing: .2rem;
            margin-bottom: 1rem;
        }

        .btn_container{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 1.5rem;
            margin-left: 2rem;
        }

        button{
            border: none;
            background-color: transparent;
            font-size: 1.5rem;
            letter-spacing: .2rem;
            color: var(--secondary-700);
            border-bottom: 1px dashed var(--secondary-700);
            padding:.7rem 1.5rem .7rem 1.5rem;
            border-radius: 3px;
            width: 10rem;
            white-space: nowrap;
            cursor:pointer;
            &:active,&:focus{
                border: 1.5px solid  var(--secondary-700);
                font-weight: 600;
                background-color: #fff;
            }
        }

        .active{
            border: 1.5px solid  var(--secondary-700);
            font-weight: 600;
            background-color: #fff;
        }

      
    }

    .clear_btn{
            border: none;
            background-color: var(--grey-50);
            font-size: 1.5rem;
            color: var(--primary-900);
            border: 1px solid var(--primary-900 );
            padding:.5rem 1.5rem .5rem 1.5rem;
            border-radius: 3px;
            width: 10rem;
            cursor:pointer;
            &:active{
                border: 1.5px solid  var(--primary-900 );
                color: var(--secondary-700);
                background-color:#fff;
            }
    }

    @media only screen and (max-width:950px){
        .search{       
        label{
            font-size: 2rem;      
        }
        input{
            font-size: 1.3rem;
        }

    }

     
        .categories,.sort{
        label{
            font-size: 1.3rem;
            margin-bottom: .5rem;
        }

        .btn_container{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 1.5rem;
            margin-left: 2rem;
        }

        button{
            font-size: 1.2rem;
            letter-spacing: .2rem;
            width: 7rem;
            white-space: nowrap;
            display: flex;
            align-items: center;
            justify-content: center;
        }

      
    }
        .clear_btn{
            font-size: 1.2rem;
            width: 8rem;
            white-space: nowrap;
    }
    }

}
`
export default Sidebar