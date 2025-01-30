export const getCardDataReferralLink = (data: any) => {
    return [
      {
        id: "userDeposit",
        title: "User Deposit",
        value: data?.userDeposit || 0.0,
        color: import.meta.env.VITE_APP_TOTAL_DEPOSIT_COLOR || "#ffffff",
      },
      {
        id: "userReturns",
        title: "User Returns",
        value: data?.userReturns || 0.0,
        color: import.meta.env.VITE_APP_RETURNS_COLOR || "#ffffff",
      },
      {
        id: "totalWithdrawn",
        title: "User Total Withdrawn",
        value: data?.totalWithdrawn || 0.0,
        color: import.meta.env.VITE_APP_TOTAL_WITHDRAWN_COLOR || "#ffffff",
      },
      {
        id: "percentRate",
        title: "Percent Rate",
        value: data?.percentRate || "0.00",
        color: import.meta.env.VITE_APP_INTEREST_RATE_COLOR || "#ffffff",
      },
    ];
  };
  

// Define the type for card data
export interface CardData {
    id: string;
    title: string;
    value: string;
    unit: string;
    iconClass: string;
  }
  
  export const getCardDataContractData = (data: any): CardData[] => [
    {
      id: "deposited",
      title: "Deposit",
      value: data?.depositAmount || "0.000 BNB",
      unit: "BNB",
      iconClass: "bi bi-wallet2 fs-3 text-primary",
    },
    {
      id: "users",
      title: "Users",
      value: data?.totalUsers || "0",
      unit: "",
      iconClass: "bi bi-person-circle fs-3 text-primary",
    },
    {
      id: "withdrawn",
      title: "Withdrawn",
      value: data?.withdrawnAmount || "0.000 BNB",
      unit: "BNB",
      iconClass: "bi bi-arrow-down-circle fs-3 text-primary",
    },
    {
      id: "refRewards",
      title: "Ref Rewards",
      value: data?.refRewardsAmount || "0.000 BNB",
      unit: "BNB",
      iconClass: "bi bi-gift fs-3 text-primary",
    },
  ];
  
  