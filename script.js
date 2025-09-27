// 전역 변수
let selectedSize = '';
let selectedColor = '';
let quantity = 1;
let isWishlist = false;

// 상품 이미지 배열
const productImages = [
    'https://images.unsplash.com/photo-1512399370925-f7b84cf7a66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBhdGhsZXRpYyUyMHdlYXIlMjBtb2RlbHxlbnwxfHx8fDE3NTg5Nzk2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1755224928593-352eeada6db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNob3J0cyUyMG1lc2glMjBmYWJyaWN8ZW58MXx8fHwxNzU4OTc5NjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1748354815017-94c4be51dea9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjbG90aGluZyUyMGRldGFpbHxlbnwxfHx8fDE3NTg5Nzk2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
];

// 이미지 갤러리 함수
function selectImage(index) {
    // 메인 이미지 변경
    const mainImage = document.getElementById('mainImage');
    mainImage.src = productImages[index];
    
    // 썸네일 active 상태 변경
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// 사이즈 선택 함수
function selectSize(size) {
    selectedSize = size;
    
    // 모든 사이즈 버튼에서 selected 클래스 제거
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(btn => btn.classList.remove('selected'));
    
    // 선택된 사이즈 버튼에 selected 클래스 추가
    const selectedBtn = document.querySelector(`[data-size="${size}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
    }
    
    console.log('선택된 사이즈:', selectedSize);
}

// 색상 선택 함수
function selectColor(color) {
    selectedColor = color;
    
    // 모든 색상 버튼에서 selected 클래스 제거
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(btn => btn.classList.remove('selected'));
    
    // 선택된 색상 버튼에 selected 클래스 추가
    const selectedBtn = document.querySelector(`[data-color="${color}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
    }
    
    // 선택된 색상 표시
    const selectedColorElement = document.getElementById('selectedColor');
    selectedColorElement.textContent = `선택된 색상: ${color}`;
    
    console.log('선택된 색상:', selectedColor);
}

// 수량 변경 함수
function changeQuantity(change) {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
        quantity = newQuantity;
        document.getElementById('quantity').textContent = quantity;
    }
    
    console.log('현재 수량:', quantity);
}

// 찜하기 토글 함수
function toggleWishlist() {
    isWishlist = !isWishlist;
    const wishlistBtn = document.getElementById('wishlistBtn');
    
    if (isWishlist) {
        wishlistBtn.classList.add('wishlist-active');
    } else {
        wishlistBtn.classList.remove('wishlist-active');
    }
    
    console.log('찜하기 상태:', isWishlist);
}

// 탭 함수
function openTab(tabName) {
    // 모든 탭 콘텐츠 숨기기
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // 모든 탭 버튼에서 active 클래스 제거
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // 선택된 탭 콘텐츠 보이기
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // 선택된 탭 버튼에 active 클래스 추가
    const selectedTabBtn = document.querySelector(`[onclick="openTab('${tabName}')"]`);
    if (selectedTabBtn) {
        selectedTabBtn.classList.add('active');
    }
    
    console.log('열린 탭:', tabName);
}

// 장바구니 담기 함수
function addToCart() {
    if (!selectedSize) {
        alert('사이즈를 선택해주세요.');
        return;
    }
    
    if (!selectedColor) {
        alert('색상을 선택해주세요.');
        return;
    }
    
    const orderInfo = {
        size: selectedSize,
        color: selectedColor,
        quantity: quantity,
        totalPrice: 62300 * quantity
    };
    
    console.log('장바구니에 추가된 상품:', orderInfo);
    alert(`장바구니에 상품이 추가되었습니다!\n사이즈: ${selectedSize}\n색상: ${selectedColor}\n수량: ${quantity}개`);
}

// 바로 구매 함수
function buyNow() {
    if (!selectedSize) {
        alert('사이즈를 선택해주세요.');
        return;
    }
    
    if (!selectedColor) {
        alert('색상을 선택해주세요.');
        return;
    }
    
    const orderInfo = {
        size: selectedSize,
        color: selectedColor,
        quantity: quantity,
        totalPrice: 62300 * quantity
    };
    
    console.log('바로 구매 상품:', orderInfo);
    alert(`구매 페이지로 이동합니다!\n사이즈: ${selectedSize}\n색상: ${selectedColor}\n수량: ${quantity}개\n총 금액: ${orderInfo.totalPrice.toLocaleString()}원`);
}

// 도움돼요 버튼 클릭 함수
function likeReview(reviewId) {
    console.log('도움돼요 클릭된 리뷰 ID:', reviewId);
    alert('리뷰가 도움이 되었다고 표시되었습니다!');
}

// 추천 상품 클릭 함수
function viewProduct(productId) {
    console.log('추천 상품 클릭:', productId);
    alert('추천 상품 상세 페이지로 이동합니다!');
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    console.log('여름 운동복 상세 페이지가 로드되었습니다.');
    
    // 장바구니 버튼에 이벤트 리스너 추가
    const cartButtons = document.querySelectorAll('.btn-primary');
    cartButtons.forEach(btn => {
        if (btn.textContent.includes('장바구니')) {
            btn.addEventListener('click', addToCart);
        }
    });
    
    // 바로 구매 버튼에 이벤트 리스너 추가
    const buyButtons = document.querySelectorAll('.btn-secondary');
    buyButtons.forEach(btn => {
        if (btn.textContent.includes('바로 구매')) {
            btn.addEventListener('click', buyNow);
        }
    });
    
    // 모바일 버튼에 이벤트 리스너 추가
    const mobileCartBtn = document.querySelector('.mobile-btn-outline');
    const mobileBuyBtn = document.querySelector('.mobile-btn-primary');
    
    if (mobileCartBtn) {
        mobileCartBtn.addEventListener('click', addToCart);
    }
    
    if (mobileBuyBtn) {
        mobileBuyBtn.addEventListener('click', buyNow);
    }
    
    // 도움돼요 버튼에 이벤트 리스너 추가
    const helpfulButtons = document.querySelectorAll('.helpful-btn');
    helpfulButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => likeReview(index + 1));
    });
    
    // 추천 상품 카드에 이벤트 리스너 추가
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.addEventListener('click', () => viewProduct(index + 1));
    });
    
    // 키보드 접근성을 위한 이벤트 리스너
    document.addEventListener('keydown', function(e) {
        // ESC 키로 모달이나 선택 취소
        if (e.key === 'Escape') {
            console.log('ESC 키가 눌렸습니다.');
        }
        
        // Enter 키로 포커스된 요소 활성화
        if (e.key === 'Enter') {
            const focusedElement = document.activeElement;
            if (focusedElement && focusedElement.tagName === 'BUTTON') {
                focusedElement.click();
            }
        }
    });
    
    // 스크롤 이벤트로 헤더 그림자 효과
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 0) {
            header.style.boxShadow = '0 2px 4px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    // 이미지 로드 에러 처리
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.log('이미지 로드 실패:', this.src);
            this.style.backgroundColor = '#f3f4f6';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.alt = '이미지를 불러올 수 없습니다';
        });
    });
    
    // 로컬 스토리지에서 이전 선택 사항 복원 (선택적)
    const savedSize = localStorage.getItem('selectedSize');
    const savedColor = localStorage.getItem('selectedColor');
    const savedQuantity = localStorage.getItem('quantity');
    const savedWishlist = localStorage.getItem('isWishlist');
    
    if (savedSize) {
        selectSize(savedSize);
    }
    
    if (savedColor) {
        selectColor(savedColor);
    }
    
    if (savedQuantity) {
        quantity = parseInt(savedQuantity);
        document.getElementById('quantity').textContent = quantity;
    }
    
    if (savedWishlist === 'true') {
        toggleWishlist();
    }
});

// 페이지 언로드 시 선택 사항 저장
window.addEventListener('beforeunload', function() {
    localStorage.setItem('selectedSize', selectedSize);
    localStorage.setItem('selectedColor', selectedColor);
    localStorage.setItem('quantity', quantity.toString());
    localStorage.setItem('isWishlist', isWishlist.toString());
});

// 유틸리티 함수들
function formatPrice(price) {
    return price.toLocaleString('ko-KR') + '원';
}

function showToast(message) {
    // 간단한 토스트 메시지 표시
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #374151;
        color: white;
        padding: 12px 16px;
        border-radius: 6px;
        z-index: 1000;
        font-size: 14px;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// 디바운스 함수 (성능 최적화용)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 반응형 대응을 위한 리사이즈 이벤트
window.addEventListener('resize', debounce(function() {
    console.log('화면 크기 변경됨:', window.innerWidth + 'x' + window.innerHeight);
}, 250));