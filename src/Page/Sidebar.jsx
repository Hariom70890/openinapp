import React from 'react'

import "boxicons/css/boxicons.min.css";
import '../style/Side.css'

import avtar from "../assets/avatar.png";
const Sidebar = () => {
  return (
    <div>
      <div className="slid-nave-mob">
        <div className="mov-logo">
          <svg
            width="24"
            height="24"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H17M1 13H17M1 7H17"
              stroke="#231F20"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <p className="slid-logo">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z"
                fill="#605BFF"
              />
            </svg>
            Base
          </p>
        </div>

        <div className="mov-logo">
          <svg
            width="19"
            height="23"
            viewBox="0 0 19 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3862 13.3255V9.20108C16.3862 5.5011 14.2012 2.38423 11.2412 1.44687C10.9482 0.59807 10.2322 0 9.38623 0C8.54023 0 7.82423 0.59807 7.53123 1.44687C4.57123 2.38538 2.38623 5.5011 2.38623 9.20108V13.3255L0.679231 15.2887C0.586189 15.3954 0.512401 15.5221 0.462116 15.6617C0.411831 15.8012 0.386041 15.9508 0.386232 16.1019V18.4022C0.386232 18.7072 0.491588 18.9997 0.679125 19.2154C0.866661 19.4311 1.12102 19.5523 1.38623 19.5523H17.3862C17.6514 19.5523 17.9058 19.4311 18.0933 19.2154C18.2809 18.9997 18.3862 18.7072 18.3862 18.4022V16.1019C18.3864 15.9508 18.3606 15.8012 18.3103 15.6617C18.2601 15.5221 18.1863 15.3954 18.0932 15.2887L16.3862 13.3255ZM16.3862 17.252H2.38623V16.578L4.09323 14.6148C4.18627 14.5081 4.26006 14.3814 4.31035 14.2419C4.36063 14.1023 4.38642 13.9527 4.38623 13.8016V9.20108C4.38623 6.03016 6.62923 3.45041 9.38623 3.45041C12.1432 3.45041 14.3862 6.03016 14.3862 9.20108V13.8016C14.3862 14.1076 14.4912 14.3997 14.6792 14.6148L16.3862 16.578V17.252ZM9.38623 23.0027C10.0055 23.0036 10.6097 22.7826 11.1147 22.3703C11.6198 21.9581 12.0006 21.3751 12.2042 20.7024H6.56823C6.77189 21.3751 7.15271 21.9581 7.65774 22.3703C8.16277 22.7826 8.76693 23.0036 9.38623 23.0027Z"
              fill="black"
            />
          </svg>

          <div style={{ width: "60px", borderRadius:"50%" }}>
            <img src={avtar} alt=""  borderRadius="50%" style={{borderRadius:"50%"}} />
          </div>
        </div>
      </div>
      <div className="slid-container">
        <p className="slid-logo">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z"
              fill="#605BFF"
            />
          </svg>
          Base
        </p>

        <div className="slid-menu">
          <p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.53991 2H7.91991C9.32991 2 10.4599 3.15 10.4599 4.561V7.97C10.4599 9.39 9.32991 10.53 7.91991 10.53H4.53991C3.13991 10.53 1.99991 9.39 1.99991 7.97V4.561C1.99991 3.15 3.13991 2 4.53991 2ZM4.53991 13.4697H7.91991C9.32991 13.4697 10.4599 14.6107 10.4599 16.0307V19.4397C10.4599 20.8497 9.32991 21.9997 7.91991 21.9997H4.53991C3.13991 21.9997 1.99991 20.8497 1.99991 19.4397V16.0307C1.99991 14.6107 3.13991 13.4697 4.53991 13.4697ZM19.46 2H16.08C14.67 2 13.54 3.15 13.54 4.561V7.97C13.54 9.39 14.67 10.53 16.08 10.53H19.46C20.86 10.53 22 9.39 22 7.97V4.561C22 3.15 20.86 2 19.46 2ZM16.08 13.4697H19.46C20.86 13.4697 22 14.6107 22 16.0307V19.4397C22 20.8497 20.86 21.9997 19.46 21.9997H16.08C14.67 21.9997 13.54 20.8497 13.54 19.4397V16.0307C13.54 14.6107 14.67 13.4697 16.08 13.4697Z"
                fill="#9A9AA9"
              />
            </svg>
            Dashboard
          </p>
          <p style={{ color: "#605BFF" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.53991 2H7.91991C9.32991 2 10.4599 3.15 10.4599 4.561V7.97C10.4599 9.39 9.32991 10.53 7.91991 10.53H4.53991C3.13991 10.53 1.99991 9.39 1.99991 7.97V4.561C1.99991 3.15 3.13991 2 4.53991 2ZM4.53991 13.4697H7.91991C9.32991 13.4697 10.4599 14.6107 10.4599 16.0307V19.4397C10.4599 20.8497 9.32991 21.9997 7.91991 21.9997H4.53991C3.13991 21.9997 1.99991 20.8497 1.99991 19.4397V16.0307C1.99991 14.6107 3.13991 13.4697 4.53991 13.4697ZM19.46 2H16.08C14.67 2 13.54 3.15 13.54 4.561V7.97C13.54 9.39 14.67 10.53 16.08 10.53H19.46C20.86 10.53 22 9.39 22 7.97V4.561C22 3.15 20.86 2 19.46 2ZM16.08 13.4697H19.46C20.86 13.4697 22 14.6107 22 16.0307V19.4397C22 20.8497 20.86 21.9997 19.46 21.9997H16.08C14.67 21.9997 13.54 20.8497 13.54 19.4397V16.0307C13.54 14.6107 14.67 13.4697 16.08 13.4697Z"
                fill="#605BFF"
              />
            </svg>
            Upload
          </p>
          <p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.7872 7.47423C19.6518 7.61908 19.4681 7.70185 19.2747 7.70185C18.559 7.70185 17.9787 8.32263 17.9787 9.07792C17.9787 9.83838 18.5522 10.4561 19.2611 10.4643C19.6605 10.4685 20 10.7664 20 11.1938V13.8476C20 16.0814 18.3075 17.893 16.2186 17.893H13.0658C12.7398 17.893 12.4758 17.6106 12.4758 17.2619V15.0271C12.4758 14.5925 12.1567 14.2511 11.7505 14.2511C11.354 14.2511 11.0251 14.5925 11.0251 15.0271V17.2619C11.0251 17.6106 10.7611 17.893 10.4362 17.893H3.78143C1.70213 17.893 0 16.0824 0 13.8476V11.1938C0 10.7664 0.339458 10.4685 0.738878 10.4643C1.44874 10.4561 2.02128 9.83838 2.02128 9.07792C2.02128 8.34333 1.46035 7.78462 0.725339 7.78462C0.531915 7.78462 0.348162 7.70185 0.212766 7.557C0.0773694 7.41215 0 7.21557 0 7.00865V4.32894C0 2.09826 1.706 0.273159 3.7911 0.273159H10.4362C10.7611 0.273159 11.0251 0.555615 11.0251 0.904288V3.55296C11.0251 3.97716 11.354 4.32894 11.7505 4.32894C12.1567 4.32894 12.4758 3.97716 12.4758 3.55296V0.904288C12.4758 0.555615 12.7398 0.273159 13.0658 0.273159H16.2186C18.3075 0.273159 20 2.08377 20 4.31859V6.92587C20 7.1328 19.9226 7.32938 19.7872 7.47423ZM11.7505 12.2439C12.1567 12.2439 12.4758 11.8921 12.4758 11.4679V7.32938C12.4758 6.90518 12.1567 6.55341 11.7505 6.55341C11.354 6.55341 11.0251 6.90518 11.0251 7.32938V11.4679C11.0251 11.8921 11.354 12.2439 11.7505 12.2439Z"
                fill="#9A9AA9"
              />
            </svg>
            Invoice
          </p>
          <p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.81 2.47565H16.191C19.28 2.47565 21 4.43586 21 7.79464V19.1705C21 22.5843 19.28 24.5005 16.191 24.5005H7.81C4.77 24.5005 3 22.5843 3 19.1705V7.79464C3 4.43586 4.77 2.47565 7.81 2.47565ZM8.07999 7.60743V7.59642H11.069C11.5 7.59642 11.85 7.98185 11.85 8.45429C11.85 8.93993 11.5 9.32537 11.069 9.32537H8.07999C7.64899 9.32537 7.29999 8.93994 7.29999 8.4664C7.29999 7.99287 7.64899 7.60743 8.07999 7.60743ZM8.07999 14.303H15.92C16.35 14.303 16.7 13.9176 16.7 13.444C16.7 12.9705 16.35 12.5839 15.92 12.5839H8.07999C7.64899 12.5839 7.29999 12.9705 7.29999 13.444C7.29999 13.9176 7.64899 14.303 8.07999 14.303ZM8.07999 19.3357H15.92C16.319 19.2916 16.62 18.9161 16.62 18.4767C16.62 18.0252 16.319 17.6508 15.92 17.6067H8.07999C7.77999 17.5737 7.48999 17.7278 7.32999 18.0142C7.16999 18.2895 7.16999 18.6529 7.32999 18.9392C7.48999 19.2145 7.77999 19.3797 8.07999 19.3357Z"
                  fill="#030229"
                />
              </g>
            </svg>
            Schedule
          </p>
          <p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.4109 3.75186L16.4119 4.57738C19.1665 4.81513 20.9862 6.88222 20.9891 10.0522L21 19.331C21.0039 22.7872 19.0322 24.9137 15.8718 24.9192L8.15188 24.9302C5.01119 24.9346 3.01482 22.7575 3.01087 19.2914L3.00001 10.1216C2.99606 6.93065 4.75153 4.86906 7.50617 4.59059L7.50518 3.76507C7.5042 3.28076 7.83001 2.91644 8.26444 2.91644C8.69886 2.91533 9.02468 3.27856 9.02567 3.76287L9.02666 4.53335L14.8914 4.52454L14.8904 3.75406C14.8894 3.26976 15.2152 2.90653 15.6497 2.90543C16.0742 2.90433 16.4099 3.26756 16.4109 3.75186ZM4.52146 10.4617L19.4696 10.4396V10.0544C19.4272 7.68792 18.349 6.44634 16.4138 6.26143L16.4148 7.10896C16.4148 7.58226 16.0801 7.95759 15.6556 7.95759C15.2211 7.95869 14.8943 7.58446 14.8943 7.11116L14.8933 6.2196L9.02862 6.22841L9.0296 7.11887C9.0296 7.59326 8.70477 7.9675 8.27035 7.9675C7.83592 7.9686 7.50912 7.59547 7.50912 7.12107L7.50813 6.27354C5.58284 6.48597 4.51751 7.73195 4.52048 10.1193L4.52146 10.4617ZM15.2399 15.4643V15.4764C15.2498 15.9827 15.625 16.3669 16.0801 16.3559C16.5244 16.3438 16.8789 15.9244 16.869 15.4181C16.8483 14.9338 16.4918 14.5386 16.0485 14.5397C15.5943 14.5507 15.2389 14.958 15.2399 15.4643ZM16.0554 20.4064C15.6013 20.3954 15.235 19.9782 15.234 19.4719C15.2241 18.9656 15.5884 18.5462 16.0426 18.5341H16.0525C16.5165 18.5341 16.8927 18.9513 16.8927 19.4686C16.8937 19.9859 16.5185 20.4053 16.0554 20.4064ZM11.1721 15.4819C11.1919 15.9882 11.568 16.3834 12.0222 16.3614C12.4665 16.3382 12.821 15.92 12.8012 15.4137C12.7903 14.9184 12.425 14.5331 11.9807 14.5342C11.5266 14.5562 11.1711 14.9756 11.1721 15.4819ZM12.0261 20.3569C11.572 20.3789 11.1968 19.9837 11.176 19.4774C11.176 18.9711 11.5305 18.5528 11.9847 18.5297C12.429 18.5286 12.7953 18.9139 12.8051 19.4081C12.8259 19.9155 12.4704 20.3338 12.0261 20.3569ZM7.1043 15.5204C7.12405 16.0268 7.50022 16.423 7.95439 16.3999C8.39869 16.3779 8.75314 15.9585 8.73241 15.4522C8.72253 14.9569 8.35722 14.5716 7.91194 14.5727C7.45777 14.5948 7.10332 15.0141 7.1043 15.5204ZM7.95836 20.3624C7.50419 20.3855 7.12901 19.9892 7.10827 19.4829C7.10728 18.9766 7.46272 18.5572 7.91689 18.5352C8.36119 18.5341 8.72749 18.9194 8.73736 19.4147C8.7581 19.921 8.40365 20.3404 7.95836 20.3624Z"
                  fill="#030229"
                />
              </g>
            </svg>
            Calendar
          </p>
          <p>
            <svg
              width="24"
              height="27"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.7071 9.81964C18.7071 11.2027 19.039 12.0179 19.7695 12.9574C20.3231 13.6495 20.5 14.5379 20.5 15.5017C20.5 16.4644 20.2128 17.3784 19.6373 18.1204C18.884 19.0099 17.8215 19.5778 16.7372 19.6765C15.1659 19.824 13.5937 19.9482 12.0005 19.9482C10.4063 19.9482 8.83505 19.8739 7.26375 19.6765C6.17846 19.5778 5.11602 19.0099 4.36367 18.1204C3.78822 17.3784 3.5 16.4644 3.5 15.5017C3.5 14.5379 3.6779 13.6495 4.23049 12.9574C4.98384 12.0179 5.29392 11.2027 5.29392 9.81964V9.35048C5.29392 7.49823 5.71333 6.28706 6.577 5.1014C7.86106 3.37227 9.91935 2.33524 11.9558 2.33524H12.0452C14.1254 2.33524 16.2502 3.42218 17.5125 5.22563C18.3314 6.38688 18.7071 7.54703 18.7071 9.35048V9.81964ZM9.07367 22.2246C9.07367 21.67 9.53582 21.416 9.96318 21.3073C10.4631 21.1909 13.5093 21.1909 14.0092 21.3073C14.4365 21.416 14.8987 21.67 14.8987 22.2246C14.8738 22.7525 14.5926 23.2206 14.204 23.5178C13.7001 23.9504 13.1087 24.2243 12.4906 24.323C12.1487 24.3718 11.8128 24.3729 11.4828 24.323C10.8636 24.2243 10.2723 23.9504 9.76937 23.5167C9.37978 23.2206 9.09852 22.7525 9.07367 22.2246Z"
                  fill="#030229"
                />
              </g>
            </svg>
            Notification
          </p>
          <p>
            <svg
              width="24"
              height="27"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.4023 15.5175C20.7599 15.7268 21.0359 16.0572 21.23 16.3875C21.6082 17.0703 21.5775 17.9072 21.2096 18.6451L20.4942 19.9666C20.1161 20.6714 19.411 21.1119 18.6854 21.1119C18.3277 21.1119 17.9291 21.0017 17.6021 20.7815C17.3364 20.5943 17.0298 20.5282 16.7028 20.5282C15.691 20.5282 14.8428 21.4422 14.8121 22.5325C14.8121 23.7989 13.8719 24.79 12.6967 24.79H11.3068C10.1214 24.79 9.18116 23.7989 9.18116 22.5325C9.16072 21.4422 8.3125 20.5282 7.30076 20.5282C6.96351 20.5282 6.65693 20.5943 6.40144 20.7815C6.07441 21.0017 5.66563 21.1119 5.31816 21.1119C4.58235 21.1119 3.8772 20.6714 3.49908 19.9666L2.79393 18.6451C2.4158 17.9293 2.39536 17.0703 2.77349 16.3875C2.937 16.0572 3.24359 15.7268 3.59106 15.5175C3.8772 15.3634 4.06116 15.1101 4.23489 14.8128C4.74587 13.8657 4.43928 12.6213 3.57062 12.0596C2.55888 11.4319 2.23185 10.0334 2.81437 8.94313L3.49908 7.64367C4.09181 6.55344 5.35904 6.168 6.381 6.80672C7.2701 7.33532 8.42491 6.98292 8.94611 6.04687C9.10962 5.73852 9.2016 5.40815 9.18116 5.07777C9.16072 4.64829 9.27314 4.24083 9.46731 3.91046C9.84543 3.22769 10.5301 2.78719 11.2762 2.76517H12.7171C13.4734 2.76517 14.1581 3.22769 14.5362 3.91046C14.7202 4.24083 14.8428 4.64829 14.8121 5.07777C14.7917 5.40815 14.8837 5.73852 15.0472 6.04687C15.5684 6.98292 16.7232 7.33532 17.6225 6.80672C18.6343 6.168 19.9117 6.55344 20.4942 7.64367L21.1789 8.94313C21.7717 10.0334 21.4447 11.4319 20.4227 12.0596C19.554 12.6213 19.2474 13.8657 19.7686 14.8128C19.9322 15.1101 20.1161 15.3634 20.4023 15.5175ZM9.10962 13.7886C9.10962 15.5176 10.4075 16.8941 12.012 16.8941C13.6165 16.8941 14.8837 15.5176 14.8837 13.7886C14.8837 12.0597 13.6165 10.6721 12.012 10.6721C10.4075 10.6721 9.10962 12.0597 9.10962 13.7886Z"
                  fill="#030229"
                />
              </g>
            </svg>
            Settings
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
