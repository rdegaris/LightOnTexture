import React from 'react';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', className = '' }) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };

    return (
        <div className={`animate-spin ${sizeClasses[size]} ${className}`}>
            <svg className="w-full h-full" viewBox="0 0 24 24">
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </svg>
        </div>
    );
};

interface ImageWithLoadingProps {
    src: string;
    alt: string;
    className?: string;
    onClick?: () => void;
}

export const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({ 
    src, 
    alt, 
    className = '', 
    onClick 
}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState(false);

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    return (
        <div className={`relative ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-sm">
                    <LoadingSpinner className="text-gray-400" />
                </div>
            )}
            {hasError ? (
                <div className="w-full h-full bg-gray-100 rounded-sm flex items-center justify-center text-gray-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    className={`w-full h-full object-cover rounded-sm shadow-sm gallery-image cursor-pointer focus:outline-none ${
                        isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'
                    }`}
                    onLoad={handleLoad}
                    onError={handleError}
                    onClick={onClick}
                    tabIndex={onClick ? 0 : -1}
                    loading="lazy"
                />
            )}
        </div>
    );
};

export default LoadingSpinner;
