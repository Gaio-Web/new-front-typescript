import React from "react";
import { Skeleton } from "@mui/material";

interface ILoadingProps {
  loading: any;
  component: any;
  height: string;
}

function LoadingComponent({ loading, component, height }: ILoadingProps): JSX.Element {
  return (
    <>
      { loading ? (
        <>
          <Skeleton variant="rectangular" width={'100%'} height={height} />
        </>
      ):(
        component
      )}
    </>
  )
}

export { LoadingComponent }
