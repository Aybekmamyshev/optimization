import React, {Component} from "react";

interface Props {
    children?: React.ReactNode
}

interface State extends Props {
    hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: State) {
        super(props);
        this.state = {hasError : false}
    }

    static getDerivedStateFromError(_ : Error) {
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary