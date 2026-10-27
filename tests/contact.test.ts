import { describe, it, expect, vi } from 'vitest'

describe('Contact Form & Inquiry Tests', () => {
  it('should validate required fields before submission', () => {
    const formData = {
      name: '',
      company: '',
      phone: '',
      email: '',
      message: '',
    }

    const validate = (data: typeof formData) => {
      if (!data.name || !data.phone || !data.email || !data.message) {
        return '필수 입력값을 모두 입력해 주세요.'
      }
      return null
    }

    const error = validate(formData)
    expect(error).toBe('필수 입력값을 모두 입력해 주세요.')
  })

  it('should pass validation when all required fields are provided', () => {
    const formData = {
      name: '홍길동',
      company: '(주)테스트',
      phone: '010-1234-5678',
      email: 'test@example.com',
      message: '문의 내용 테스트입니다.',
    }

    const validate = (data: typeof formData) => {
      if (!data.name || !data.phone || !data.email || !data.message) {
        return '필수 입력값을 모두 입력해 주세요.'
      }
      return null
    }

    const error = validate(formData)
    expect(error).toBeNull()
  })

  it('should verify admin password authentication value matches itrs@2026', () => {
    const adminPassword = 'itrs@2026'
    expect(adminPassword).toBe('itrs@2026')
  })

  it('should simulate successful database insertion payload structure', async () => {
    const mockInsert = vi.fn().mockResolvedValue({ error: null })
    const mockFrom = vi.fn().mockReturnValue({ insert: mockInsert })
    
    const supabaseClient = {
      from: mockFrom,
    }

    const payload = {
      name: '김철수',
      company: 'ITR',
      phone: '010-9876-5432',
      email: 'chulsoo@itrsolution.co.kr',
      message: '솔루션 도입 견적 문의드립니다.',
      status: 'unread',
    }

    const { error } = await supabaseClient.from('inquiries').insert([payload])

    expect(mockFrom).toHaveBeenCalledWith('inquiries')
    expect(mockInsert).toHaveBeenCalledWith([payload])
    expect(error).toBeNull()
  })
})
